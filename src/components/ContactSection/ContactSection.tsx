import React from "react"
import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../lightswind/form.js"
import { Input } from "../lightswind/input.js"
import { Textarea } from "../lightswind/textarea.js"
import { Button } from "../lightswind/button.js"

type ContactFormValues = {
  name: string
  email: string
  message: string
}

export const ContactSection: React.FC = () => {
  const methods = useForm<ContactFormValues>({
    mode: "onBlur",
    defaultValues: { name: "", email: "", message: "" },
  })

  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitSuccess, setSubmitSuccess] = React.useState<string | null>(null)
  const [submitError, setSubmitError] = React.useState<string | null>(null)
  const endpointEnv = import.meta.env.VITE_FORMSPREE_ENDPOINT as
    | string
    | undefined
  const endpoint = endpointEnv?.trim()

  const onSubmit: SubmitHandler<ContactFormValues> = async (values) => {
    setIsSubmitting(true)
    setSubmitSuccess(null)
    setSubmitError(null)

    if (!endpoint) {
      setIsSubmitting(false)
      setSubmitError(
        "Form endpoint is not configured. Please set VITE_FORMSPREE_ENDPOINT."
      )
      return
    }

    try {
      const formData = new FormData()
      formData.append("name", values.name)
      formData.append("email", values.email)
      formData.append("message", values.message)

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      })

      if (response.ok) {
        setSubmitSuccess("Thanks! Your message has been sent.")
        methods.reset()
      } else {
        // Try to extract useful error information
        let msg = "Sorry, something went wrong. Please try again."
        const text = await response.text().catch(() => "")
        try {
          const data = JSON.parse(text)
          msg = (data && (data.error || data.message)) || msg
        } catch {
          if (text) msg = `${msg} (status ${response.status}: ${text})`
          else msg = `${msg} (status ${response.status})`
        }
        setSubmitError(msg)
      }
    } catch (err) {
      setSubmitError("Network error. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold tracking-tight">Get in touch</h2>
        <p className="text-muted-foreground mt-2">
          Have a question or proposal? I’d love to hear from you.
        </p>
      </div>

      <div className="mx-auto w-full max-w-2xl">
        <Form {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            action={endpoint || undefined}
            method="POST"
            className="space-y-6 bg-card/60 backdrop-blur rounded-2xl p-6 border border-border"
          >
            <FormField
              control={methods.control}
              name="name"
              rules={{ required: "Your name is required" }}
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Jane Doe" {...field} />
                  </FormControl>
                  <FormDescription>How should I address you?</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={methods.control}
              name="email"
              rules={{
                required: "Email is required",
                pattern: {
                  value:
                    /^(?:[a-zA-Z0-9_'^&+%`{}~|\-]+(?:\.[a-zA-Z0-9_'^&+%`{}~|\-]+)*)@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email",
                },
              }}
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="jane@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={methods.control}
              name="message"
              rules={{
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Please write at least 10 characters",
                },
              }}
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={5}
                      placeholder="Tell me a bit about your project..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-2 space-y-2">
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send message"}
              </Button>
              {submitSuccess && (
                <p className="text-sm text-green-600">{submitSuccess}</p>
              )}
              {submitError && (
                <p className="text-sm text-red-600">{submitError}</p>
              )}
            </div>
          </form>
        </Form>
      </div>
    </section>
  )
}

export default ContactSection

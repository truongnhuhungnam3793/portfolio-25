import { useForm, ValidationError } from "@formspree/react"
import { Input } from "../lightswind/input.js"
import { Textarea } from "../lightswind/textarea.js"
import { Button } from "../lightswind/button.js"

export const ContactSection = () => {
  const endpointEnv = import.meta.env.VITE_FORMSPREE_ENDPOINT as
    | string
    | undefined
  const [state, handleSubmit] = useForm(endpointEnv || "")
  return (
    <section className="py-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold tracking-tight">Get in touch</h2>
        <p className="text-muted-foreground mt-2">
          Have a question or proposal? I’d love to hear from you.
        </p>
      </div>

      <div className="mx-auto w-full max-w-2xl">
        {state.succeeded ? (
          <div className="space-y-2 bg-card/60 backdrop-blur rounded-2xl p-6 border border-border text-center">
            <p className="text-green-600">
              Thanks! Your message has been sent.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            action={endpointEnv || undefined}
            method="POST"
            className="space-y-6 bg-card/60 backdrop-blur rounded-2xl p-6 border border-border"
          >
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="jane@example.com"
              />
              <div className="mt-1 text-sm text-destructive">
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me a bit about your project..."
              />
              <div className="mt-1 text-sm text-destructive">
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                className="w-full"
                disabled={state.submitting}
              >
                {state.submitting ? "Sending..." : "Send message"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

export default ContactSection

import * as React from "react"

declare module "../lightswind/form.js" {
  export const Form: React.ComponentType<any>
  export const FormItem: React.ForwardRefExoticComponent<any>
  export const FormLabel: React.ForwardRefExoticComponent<any>
  export const FormControl: React.ForwardRefExoticComponent<any>
  export const FormDescription: React.ForwardRefExoticComponent<any>
  export const FormMessage: React.ForwardRefExoticComponent<any>
  export const FormField: React.ComponentType<any>
  export function useFormField(): any
}

declare module "../lightswind/input.js" {
  export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}
  export const Input: React.ForwardRefExoticComponent<
    InputProps & React.RefAttributes<HTMLInputElement>
  >
}

declare module "../lightswind/textarea.js" {
  export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
  export const Textarea: React.ForwardRefExoticComponent<
    TextareaProps & React.RefAttributes<HTMLTextAreaElement>
  >
}

declare module "../lightswind/button.js" {
  export type ButtonVariant =
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "github"
  export type ButtonSize = "default" | "sm" | "lg" | "icon"
  export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant
    size?: ButtonSize
    asChild?: boolean
  }
  export function buttonVariants(options?: {
    variant?: ButtonVariant
    size?: ButtonSize
    className?: string
  }): string
  export const Button: React.ForwardRefExoticComponent<
    ButtonProps & React.RefAttributes<HTMLButtonElement>
  >
}

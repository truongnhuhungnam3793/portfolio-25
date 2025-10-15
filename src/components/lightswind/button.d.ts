import * as React from "react"
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

import * as React from "react"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

function cn(...inputs: Array<string | undefined | null | false>) {
  return twMerge(clsx(inputs))
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background",
          "h-10 px-4 py-2",
          className,
        )}
        {...props}
      />
    )
  },
)

Button.displayName = "Button"

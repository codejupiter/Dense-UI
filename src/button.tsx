import { Slot } from '@radix-ui/react-slot'
import type { ButtonHTMLAttributes } from 'react'
import { forwardRef } from 'react'
import { cn } from './lib/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
  size?: ButtonSize
  variant?: ButtonVariant
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, size = 'md', variant = 'secondary', ...props }, ref) => {
    const Component = asChild ? Slot : 'button'
    return <Component className={cn('dui-button', `dui-button-${variant}`, `dui-button-${size}`, className)} ref={ref} {...props} />
  },
)

Button.displayName = 'Button'

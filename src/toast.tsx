import * as ToastPrimitive from '@radix-ui/react-toast'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export const ToastProvider = ToastPrimitive.Provider
export const ToastViewport = () => <ToastPrimitive.Viewport className="dui-toast-viewport" />

export type ToastProps = ComponentPropsWithoutRef<typeof ToastPrimitive.Root> & {
  description?: ReactNode
  title: ReactNode
}

export function Toast({ description, title, ...props }: ToastProps) {
  return (
    <ToastPrimitive.Root className="dui-toast" {...props}>
      <ToastPrimitive.Title className="dui-toast-title">{title}</ToastPrimitive.Title>
      {description && <ToastPrimitive.Description className="dui-toast-description">{description}</ToastPrimitive.Description>}
    </ToastPrimitive.Root>
  )
}

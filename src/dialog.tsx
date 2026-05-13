import * as DialogPrimitive from '@radix-ui/react-dialog'
import type { ReactNode } from 'react'

export type DialogProps = {
  children: ReactNode
  description?: ReactNode
  title: ReactNode
  trigger: ReactNode
}

export function Dialog({ children, description, title, trigger }: DialogProps) {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="dui-dialog-overlay" />
        <DialogPrimitive.Content className="dui-dialog">
          <DialogPrimitive.Title className="dui-dialog-title">{title}</DialogPrimitive.Title>
          {description && <DialogPrimitive.Description className="dui-dialog-description">{description}</DialogPrimitive.Description>}
          <div className="dui-dialog-body">{children}</div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

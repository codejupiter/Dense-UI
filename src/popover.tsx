import * as PopoverPrimitive from '@radix-ui/react-popover'
import type { ReactNode } from 'react'

export type PopoverProps = {
  children: ReactNode
  content: ReactNode
}

export function Popover({ children, content }: PopoverProps) {
  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger asChild>{children}</PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content className="dui-popover" sideOffset={6}>
          {content}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  )
}

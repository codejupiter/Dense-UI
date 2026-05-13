import * as SwitchPrimitive from '@radix-ui/react-switch'
import { forwardRef } from 'react'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { cn } from './lib/cn'

export type SwitchProps = ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>

export const Switch = forwardRef<ElementRef<typeof SwitchPrimitive.Root>, SwitchProps>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root className={cn('dui-switch', className)} ref={ref} {...props}>
    <SwitchPrimitive.Thumb className="dui-switch-thumb" />
  </SwitchPrimitive.Root>
))

Switch.displayName = 'Switch'

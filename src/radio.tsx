import * as RadioPrimitive from '@radix-ui/react-radio-group'
import { forwardRef } from 'react'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { cn } from './lib/cn'

export const RadioGroup = RadioPrimitive.Root

export type RadioProps = ComponentPropsWithoutRef<typeof RadioPrimitive.Item>

export const Radio = forwardRef<ElementRef<typeof RadioPrimitive.Item>, RadioProps>(({ className, ...props }, ref) => (
  <RadioPrimitive.Item className={cn('dui-radio', className)} ref={ref} {...props}>
    <RadioPrimitive.Indicator className="dui-radio-indicator" />
  </RadioPrimitive.Item>
))

Radio.displayName = 'Radio'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cn } from './lib/cn'

export const Tabs = TabsPrimitive.Root
export const TabsContent = TabsPrimitive.Content

export type TabsListProps = TabsPrimitive.TabsListProps
export type TabsTriggerProps = TabsPrimitive.TabsTriggerProps

export function TabsList({ className, ...props }: TabsListProps) {
  return <TabsPrimitive.List className={cn('dui-tabs-list', className)} {...props} />
}

export function TabsTrigger({ className, ...props }: TabsTriggerProps) {
  return <TabsPrimitive.Trigger className={cn('dui-tabs-trigger', className)} {...props} />
}

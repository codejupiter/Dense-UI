import * as Popover from '@radix-ui/react-popover'
import { Command } from 'cmdk'
import { Check, ChevronsUpDown } from 'lucide-react'
import { useState } from 'react'
import { cn } from './lib/cn'
import type { SelectOption } from './select'

export type ComboboxProps = {
  className?: string
  onValueChange: (value: string) => void
  options: SelectOption[]
  placeholder?: string
  value?: string
}

export function Combobox({ className, onValueChange, options, placeholder = 'Search...', value }: ComboboxProps) {
  const [open, setOpen] = useState(false)
  const selected = options.find((option) => option.value === value)

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button className={cn('dui-select-trigger', className)} type="button">
          <span>{selected?.label ?? placeholder}</span>
          <ChevronsUpDown size={14} aria-hidden="true" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="dui-popover dui-command-popover" align="start" sideOffset={4}>
          <Command className="dui-command">
            <Command.Input className="dui-command-input" placeholder={placeholder} />
            <Command.List className="dui-command-list">
              <Command.Empty className="dui-empty">No results</Command.Empty>
              {options.map((option) => (
                <Command.Item
                  className="dui-command-item"
                  disabled={option.disabled}
                  key={option.value}
                  onSelect={() => {
                    onValueChange(option.value)
                    setOpen(false)
                  }}
                  value={`${option.label} ${option.value}`}
                >
                  <span>{option.label}</span>
                  {option.value === value && <Check size={14} aria-hidden="true" />}
                </Command.Item>
              ))}
            </Command.List>
          </Command>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

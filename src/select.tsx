import * as Popover from '@radix-ui/react-popover'
import { Check, ChevronDown } from 'lucide-react'
import { useMemo, useState } from 'react'
import { cn } from './lib/cn'

export type SelectOption = {
  label: string
  value: string
  disabled?: boolean
}

export type SelectProps = {
  className?: string
  emptyLabel?: string
  maxVisible?: number
  onValueChange: (value: string) => void
  options: SelectOption[]
  placeholder?: string
  value?: string
}

export function Select({
  className,
  emptyLabel = 'No options',
  maxVisible = 80,
  onValueChange,
  options,
  placeholder = 'Select',
  value,
}: SelectProps) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const selected = options.find((option) => option.value === value)
  const visibleOptions = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    const filtered = normalized
      ? options.filter((option) => `${option.label} ${option.value}`.toLowerCase().includes(normalized))
      : options
    return filtered.slice(0, maxVisible)
  }, [maxVisible, options, query])

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button className={cn('dui-select-trigger', className)} type="button" aria-label={placeholder}>
          <span>{selected?.label ?? placeholder}</span>
          <ChevronDown size={14} aria-hidden="true" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="dui-popover dui-select-content" align="start" sideOffset={4}>
          <input
            className="dui-select-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Filter options"
          />
          <div className="dui-select-list" role="listbox">
            {visibleOptions.length === 0 && <div className="dui-empty">{emptyLabel}</div>}
            {visibleOptions.map((option) => (
              <button
                aria-selected={option.value === value}
                className="dui-select-option"
                disabled={option.disabled}
                key={option.value}
                onClick={() => {
                  onValueChange(option.value)
                  setOpen(false)
                }}
                role="option"
                type="button"
              >
                <span>{option.label}</span>
                {option.value === value && <Check size={14} aria-hidden="true" />}
              </button>
            ))}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

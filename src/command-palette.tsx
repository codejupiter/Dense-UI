import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Command } from 'cmdk'

export type CommandAction = {
  group?: string
  id: string
  label: string
  onSelect: () => void
}

export type CommandPaletteProps = {
  actions: CommandAction[]
  onOpenChange: (open: boolean) => void
  open: boolean
  placeholder?: string
}

export function CommandPalette({ actions, onOpenChange, open, placeholder = 'Search commands' }: CommandPaletteProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="dui-dialog-overlay" />
        <DialogPrimitive.Content className="dui-command-dialog">
          <Command className="dui-command">
            <Command.Input className="dui-command-input" placeholder={placeholder} />
            <Command.List className="dui-command-list">
              <Command.Empty className="dui-empty">No commands found</Command.Empty>
              {actions.map((action) => (
                <Command.Item
                  className="dui-command-item"
                  key={action.id}
                  onSelect={() => {
                    action.onSelect()
                    onOpenChange(false)
                  }}
                >
                  {action.label}
                </Command.Item>
              ))}
            </Command.List>
          </Command>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

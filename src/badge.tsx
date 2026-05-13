import type { HTMLAttributes } from 'react'
import { X } from 'lucide-react'
import { cn } from './lib/cn'

export type BadgeTone = 'neutral' | 'success' | 'warning' | 'danger' | 'info'

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: BadgeTone
}

export function Badge({ className, tone = 'neutral', ...props }: BadgeProps) {
  return <span className={cn('dui-badge', `dui-badge-${tone}`, className)} {...props} />
}

export type TagProps = BadgeProps & {
  onRemove?: () => void
}

export function Tag({ children, className, onRemove, tone = 'neutral', ...props }: TagProps) {
  return (
    <span className={cn('dui-tag', `dui-badge-${tone}`, className)} {...props}>
      {children}
      {onRemove && (
        <button type="button" onClick={onRemove} aria-label="Remove tag">
          <X size={12} aria-hidden="true" />
        </button>
      )}
    </span>
  )
}

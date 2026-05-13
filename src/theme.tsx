import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from './lib/cn'

export type Density = 1 | 2 | 3 | 4
export type Theme = 'light' | 'dark'

export type ThemeProviderProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  density?: Density
  theme?: Theme
}

export function ThemeProvider({ children, className, density = 2, theme = 'light', ...props }: ThemeProviderProps) {
  return (
    <div className={cn('dui-theme', className)} data-density={density} data-theme={theme} {...props}>
      {children}
    </div>
  )
}

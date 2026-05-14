import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ThemeProvider } from './theme'

describe('ThemeProvider', () => {
  it('sets theme and density attributes for a themed subtree', () => {
    render(
      <ThemeProvider density={3} theme="dark" data-testid="theme-root">
        <span>Dashboard</span>
      </ThemeProvider>,
    )

    const root = screen.getByTestId('theme-root')
    expect(root).toHaveClass('dui-theme')
    expect(root).toHaveAttribute('data-density', '3')
    expect(root).toHaveAttribute('data-theme', 'dark')
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
  })
})

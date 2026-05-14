import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Button } from './button'

describe('Button', () => {
  it('renders density-aware variant and size classes', () => {
    render(
      <Button size="sm" variant="primary">
        Save view
      </Button>,
    )

    const button = screen.getByRole('button', { name: /save view/i })
    expect(button).toHaveClass('dui-button', 'dui-button-primary', 'dui-button-sm')
  })

  it('supports Radix Slot composition through asChild', () => {
    render(
      <Button asChild variant="ghost">
        <a href="/docs">Docs</a>
      </Button>,
    )

    const link = screen.getByRole('link', { name: /docs/i })
    expect(link).toHaveAttribute('href', '/docs')
    expect(link).toHaveClass('dui-button', 'dui-button-ghost')
  })

  it('forwards native button interactions', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()

    render(<Button onClick={onClick}>Run report</Button>)
    await user.click(screen.getByRole('button', { name: /run report/i }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})

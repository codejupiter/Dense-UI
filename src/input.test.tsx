import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Input, Textarea } from './input'

describe('Input', () => {
  it('preserves native input behavior and custom classes', async () => {
    const user = userEvent.setup()

    render(<Input aria-label="Search transactions" className="custom-input" />)
    const input = screen.getByRole('textbox', { name: /search transactions/i })

    await user.type(input, 'travel')

    expect(input).toHaveValue('travel')
    expect(input).toHaveClass('dui-input', 'custom-input')
  })
})

describe('Textarea', () => {
  it('renders with the shared input and textarea classes', () => {
    render(<Textarea aria-label="Notes" />)

    expect(screen.getByRole('textbox', { name: /notes/i })).toHaveClass('dui-input', 'dui-textarea')
  })
})

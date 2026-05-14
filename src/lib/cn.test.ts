import { describe, expect, it } from 'vitest'
import { cn } from './cn'

describe('cn', () => {
  it('joins truthy class names and removes empty values', () => {
    expect(cn('dui-button', false, undefined, null, 'dui-button-sm')).toBe('dui-button dui-button-sm')
  })
})

import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from '../Counter'

describe('Counter Component', () => {
  it('renders with initial count of 0', () => {
    render(<Counter />)
    
    expect(screen.getByRole('heading', { name: /counter component/i })).toBeInTheDocument()
    expect(screen.getByText('Count: 0')).toBeInTheDocument()
  })

  it('renders all buttons', () => {
    render(<Counter />)
    
    expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Reset' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument()
  })

  it('increments count when + button is clicked', async () => {
    const user = userEvent.setup()
    render(<Counter />)
    
    const incrementButton = screen.getByRole('button', { name: '+' })
    await user.click(incrementButton)
    
    expect(screen.getByText('Count: 1')).toBeInTheDocument()
  })

  it('decrements count when - button is clicked', async () => {
    const user = userEvent.setup()
    render(<Counter />)
    
    const decrementButton = screen.getByRole('button', { name: '-' })
    await user.click(decrementButton)
    
    expect(screen.getByText('Count: -1')).toBeInTheDocument()
  })

  it('resets count to 0 when reset button is clicked', async () => {
    const user = userEvent.setup()
    render(<Counter />)
    
    // First increment the counter
    const incrementButton = screen.getByRole('button', { name: '+' })
    await user.click(incrementButton)
    await user.click(incrementButton)
    expect(screen.getByText('Count: 2')).toBeInTheDocument()
    
    // Then reset
    const resetButton = screen.getByRole('button', { name: 'Reset' })
    await user.click(resetButton)
    
    expect(screen.getByText('Count: 0')).toBeInTheDocument()
  })

  it('handles multiple operations correctly', async () => {
    const user = userEvent.setup()
    render(<Counter />)
    
    const incrementButton = screen.getByRole('button', { name: '+' })
    const decrementButton = screen.getByRole('button', { name: '-' })
    const resetButton = screen.getByRole('button', { name: 'Reset' })
    
    // Increment 3 times
    await user.click(incrementButton)
    await user.click(incrementButton)
    await user.click(incrementButton)
    expect(screen.getByText('Count: 3')).toBeInTheDocument()
    
    // Decrement 1 time
    await user.click(decrementButton)
    expect(screen.getByText('Count: 2')).toBeInTheDocument()
    
    // Reset
    await user.click(resetButton)
    expect(screen.getByText('Count: 0')).toBeInTheDocument()
    
    // Decrement from 0
    await user.click(decrementButton)
    expect(screen.getByText('Count: -1')).toBeInTheDocument()
  })

  it('maintains count state between renders', async () => {
    const user = userEvent.setup()
    const { rerender } = render(<Counter />)
    
    const incrementButton = screen.getByRole('button', { name: '+' })
    await user.click(incrementButton)
    expect(screen.getByText('Count: 1')).toBeInTheDocument()
    
    // Rerender the component
    rerender(<Counter />)
    
    // Count should be reset to initial value (new component instance)
    expect(screen.getByText('Count: 0')).toBeInTheDocument()
  })

  it('has proper accessibility structure', () => {
    render(<Counter />)
    
    // Check heading structure
    const heading = screen.getByRole('heading', { name: /counter component/i })
    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe('H2')
    
    // Check all buttons are accessible
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(3)
    
    // Check buttons have proper text content
    expect(buttons.some(button => button.textContent === '+')).toBe(true)
    expect(buttons.some(button => button.textContent === '-')).toBe(true)
    expect(buttons.some(button => button.textContent === 'Reset')).toBe(true)
  })

  it('displays count with proper formatting', () => {
    render(<Counter />)
    
    const countText = screen.getByText(/count:/i)
    expect(countText).toBeInTheDocument()
    expect(countText.textContent).toBe('Count: 0')
  })
})
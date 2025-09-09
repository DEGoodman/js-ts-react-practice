import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import UserCard from '../UserCard'

// Mock user data
const mockUser = {
  id: 1,
  name: 'John Doe',
  username: 'johndoe',
  email: 'john@example.com',
  phone: '1-555-123-4567',
  website: 'johndoe.com',
  company: {
    name: 'Acme Corp'
  }
}

// Mock fetch globally
const mockFetch = vi.fn()
global.fetch = mockFetch

describe('UserCard Component', () => {
  beforeEach(() => {
    mockFetch.mockReset()
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('renders heading', () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockUser,
    })

    render(<UserCard />)
    
    expect(screen.getByRole('heading', { name: /user card/i })).toBeInTheDocument()
  })

  it('shows loading state initially', () => {
    mockFetch.mockImplementation(() => new Promise(() => {})) // Never resolves

    render(<UserCard />)
    
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('displays user information after successful fetch', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockUser,
    })

    render(<UserCard />)
    
    // Wait for loading to complete
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    })

    // Check all user information is displayed
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('johndoe')).toBeInTheDocument()
    expect(screen.getByText('john@example.com')).toBeInTheDocument()
    expect(screen.getByText('1-555-123-4567')).toBeInTheDocument()
    expect(screen.getByText('johndoe.com')).toBeInTheDocument()
    expect(screen.getByText('Acme Corp')).toBeInTheDocument()
  })

  it('displays user information with proper labels', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockUser,
    })

    render(<UserCard />)
    
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    })

    // Check labels are present
    expect(screen.getByText(/username:/i)).toBeInTheDocument()
    expect(screen.getByText(/email:/i)).toBeInTheDocument()
    expect(screen.getByText(/phone:/i)).toBeInTheDocument()
    expect(screen.getByText(/website:/i)).toBeInTheDocument()
    expect(screen.getByText(/company:/i)).toBeInTheDocument()
  })

  it('shows error message when fetch fails', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Failed to fetch user'))

    render(<UserCard />)
    
    await waitFor(() => {
      expect(screen.getByText(/error: failed to fetch user/i)).toBeInTheDocument()
    })

    expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: /try again/i })).toBeInTheDocument()
  })

  it('shows error message when response is not ok', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({}),
    })

    render(<UserCard />)
    
    await waitFor(() => {
      expect(screen.getByText(/error: failed to fetch user/i)).toBeInTheDocument()
    })

    expect(screen.getByRole('button', { name: /try again/i })).toBeInTheDocument()
  })

  it('fetches a random user ID between 1 and 10', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockUser,
    })

    render(<UserCard />)
    
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalled()
    })

    const fetchUrl = mockFetch.mock.calls[0][0]
    expect(fetchUrl).toMatch(/https:\/\/jsonplaceholder\.typicode\.com\/users\/\d+/)
    
    // Extract user ID from URL
    const userId = parseInt(fetchUrl.match(/users\/(\d+)/)[1])
    expect(userId).toBeGreaterThanOrEqual(1)
    expect(userId).toBeLessThanOrEqual(10)
  })

  it('refetches user when "Load New User" button is clicked', async () => {
    mockFetch
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockUser,
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          ...mockUser,
          id: 2,
          name: 'Jane Doe',
          username: 'janedoe'
        }),
      })

    const user = userEvent.setup()
    render(<UserCard />)
    
    // Wait for first user to load
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument()
    })

    // Click load new user button
    const loadNewUserButton = screen.getByRole('button', { name: /load new user/i })
    await user.click(loadNewUserButton)

    // Should show loading again
    expect(screen.getByText('Loading...')).toBeInTheDocument()

    // Wait for new user to load
    await waitFor(() => {
      expect(screen.getByText('Jane Doe')).toBeInTheDocument()
    })

    expect(mockFetch).toHaveBeenCalledTimes(2)
  })

  it('retries fetch when "Try Again" button is clicked after error', async () => {
    mockFetch
      .mockRejectedValueOnce(new Error('Network error'))
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockUser,
      })

    const user = userEvent.setup()
    render(<UserCard />)
    
    // Wait for error to appear
    await waitFor(() => {
      expect(screen.getByText(/error: network error/i)).toBeInTheDocument()
    })

    // Click try again button
    const tryAgainButton = screen.getByRole('button', { name: /try again/i })
    await user.click(tryAgainButton)

    // Should show loading
    expect(screen.getByText('Loading...')).toBeInTheDocument()

    // Wait for successful load
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument()
    })

    expect(mockFetch).toHaveBeenCalledTimes(2)
  })

  it('clears error state when refetching', async () => {
    mockFetch
      .mockRejectedValueOnce(new Error('Network error'))
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockUser,
      })

    const user = userEvent.setup()
    render(<UserCard />)
    
    // Wait for error
    await waitFor(() => {
      expect(screen.getByText(/error: network error/i)).toBeInTheDocument()
    })

    // Click try again
    const tryAgainButton = screen.getByRole('button', { name: /try again/i })
    await user.click(tryAgainButton)

    // Error should be cleared during loading
    expect(screen.queryByText(/error: network error/i)).not.toBeInTheDocument()
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('handles non-Error thrown values', async () => {
    mockFetch.mockRejectedValueOnce('String error')

    render(<UserCard />)
    
    await waitFor(() => {
      expect(screen.getByText(/error: an error occurred/i)).toBeInTheDocument()
    })
  })

  it('fetches user on component mount', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockUser,
    })

    render(<UserCard />)
    
    expect(mockFetch).toHaveBeenCalledTimes(1)
    
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument()
    })
  })

  it('has proper accessibility structure', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockUser,
    })

    render(<UserCard />)
    
    // Check heading
    const heading = screen.getByRole('heading', { name: /user card/i })
    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe('H2')
    
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    })

    // Check user name heading
    const userHeading = screen.getByRole('heading', { name: 'John Doe' })
    expect(userHeading).toBeInTheDocument()
    expect(userHeading.tagName).toBe('H3')
    
    // Check button
    const button = screen.getByRole('button', { name: /load new user/i })
    expect(button).toBeInTheDocument()
  })

  it('shows loading state during refetch', async () => {
    mockFetch
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockUser,
      })
      .mockImplementation(() => new Promise(() => {})) // Never resolves

    const user = userEvent.setup()
    render(<UserCard />)
    
    // Wait for first user to load
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument()
    })

    // Click load new user
    const loadButton = screen.getByRole('button', { name: /load new user/i })
    await user.click(loadButton)

    // Should show loading state
    expect(screen.getByText('Loading...')).toBeInTheDocument()
    expect(screen.queryByText('John Doe')).not.toBeInTheDocument()
  })
})
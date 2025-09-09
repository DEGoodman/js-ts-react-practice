import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodoList from '../TodoList'

describe('TodoList Component', () => {
  it('renders with heading and input field', () => {
    render(<TodoList />)
    
    expect(screen.getByRole('heading', { name: /todo list/i })).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Add a new todo...')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument()
  })

  it('shows empty state message when no todos', () => {
    render(<TodoList />)
    
    expect(screen.getByText('No todos yet. Add one above!')).toBeInTheDocument()
  })

  it('adds a new todo when add button is clicked', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    
    const input = screen.getByPlaceholderText('Add a new todo...')
    const addButton = screen.getByRole('button', { name: 'Add' })
    
    await user.type(input, 'Test todo item')
    await user.click(addButton)
    
    expect(screen.getByText('Test todo item')).toBeInTheDocument()
    expect(screen.queryByText('No todos yet. Add one above!')).not.toBeInTheDocument()
  })

  it('adds a new todo when Enter key is pressed', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    
    const input = screen.getByPlaceholderText('Add a new todo...')
    
    await user.type(input, 'Test todo with Enter{enter}')
    
    expect(screen.getByText('Test todo with Enter')).toBeInTheDocument()
    expect(input).toHaveValue('')
  })

  it('clears input field after adding todo', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    
    const input = screen.getByPlaceholderText('Add a new todo...')
    const addButton = screen.getByRole('button', { name: 'Add' })
    
    await user.type(input, 'Test todo')
    await user.click(addButton)
    
    expect(input).toHaveValue('')
  })

  it('does not add empty or whitespace-only todos', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    
    const input = screen.getByPlaceholderText('Add a new todo...')
    const addButton = screen.getByRole('button', { name: 'Add' })
    
    // Try to add empty todo
    await user.click(addButton)
    expect(screen.getByText('No todos yet. Add one above!')).toBeInTheDocument()
    
    // Try to add whitespace-only todo
    await user.type(input, '   ')
    await user.click(addButton)
    expect(screen.getByText('No todos yet. Add one above!')).toBeInTheDocument()
    
    // Input should be cleared
    expect(input).toHaveValue('')
  })

  it('trims whitespace from todo text', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    
    const input = screen.getByPlaceholderText('Add a new todo...')
    const addButton = screen.getByRole('button', { name: 'Add' })
    
    await user.type(input, '  Test todo with spaces  ')
    await user.click(addButton)
    
    expect(screen.getByText('Test todo with spaces')).toBeInTheDocument()
  })

  it('toggles todo completion when checkbox is clicked', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    
    // Add a todo first
    const input = screen.getByPlaceholderText('Add a new todo...')
    await user.type(input, 'Test todo{enter}')
    
    const checkbox = screen.getByRole('checkbox')
    const todoText = screen.getByText('Test todo')
    
    // Initially unchecked and not struck through
    expect(checkbox).not.toBeChecked()
    expect(todoText).not.toHaveStyle('text-decoration: line-through')
    
    // Click to complete
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
    expect(todoText).toHaveStyle('text-decoration: line-through')
    
    // Click to uncomplete
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
    expect(todoText).not.toHaveStyle('text-decoration: line-through')
  })

  it('deletes todo when delete button is clicked', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    
    // Add a todo first
    const input = screen.getByPlaceholderText('Add a new todo...')
    await user.type(input, 'Todo to delete{enter}')
    
    expect(screen.getByText('Todo to delete')).toBeInTheDocument()
    
    const deleteButton = screen.getByRole('button', { name: 'Delete' })
    await user.click(deleteButton)
    
    expect(screen.queryByText('Todo to delete')).not.toBeInTheDocument()
    expect(screen.getByText('No todos yet. Add one above!')).toBeInTheDocument()
  })

  it('handles multiple todos correctly', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    
    const input = screen.getByPlaceholderText('Add a new todo...')
    
    // Add multiple todos
    await user.type(input, 'First todo{enter}')
    await user.type(input, 'Second todo{enter}')
    await user.type(input, 'Third todo{enter}')
    
    expect(screen.getByText('First todo')).toBeInTheDocument()
    expect(screen.getByText('Second todo')).toBeInTheDocument()
    expect(screen.getByText('Third todo')).toBeInTheDocument()
    
    // Should have 3 checkboxes and 3 delete buttons
    expect(screen.getAllByRole('checkbox')).toHaveLength(3)
    expect(screen.getAllByRole('button', { name: 'Delete' })).toHaveLength(3)
  })

  it('maintains todo state independently', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    
    const input = screen.getByPlaceholderText('Add a new todo...')
    
    // Add two todos
    await user.type(input, 'First todo{enter}')
    await user.type(input, 'Second todo{enter}')
    
    const checkboxes = screen.getAllByRole('checkbox')
    const firstTodoText = screen.getByText('First todo')
    const secondTodoText = screen.getByText('Second todo')
    
    // Complete only the first todo
    await user.click(checkboxes[0])
    
    expect(checkboxes[0]).toBeChecked()
    expect(checkboxes[1]).not.toBeChecked()
    expect(firstTodoText).toHaveStyle('text-decoration: line-through')
    expect(secondTodoText).not.toHaveStyle('text-decoration: line-through')
  })

  it('deletes correct todo from multiple todos', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    
    const input = screen.getByPlaceholderText('Add a new todo...')
    
    // Add three todos
    await user.type(input, 'First todo{enter}')
    await user.type(input, 'Second todo{enter}')
    await user.type(input, 'Third todo{enter}')
    
    const deleteButtons = screen.getAllByRole('button', { name: 'Delete' })
    
    // Delete the second todo (middle one)
    await user.click(deleteButtons[1])
    
    expect(screen.getByText('First todo')).toBeInTheDocument()
    expect(screen.queryByText('Second todo')).not.toBeInTheDocument()
    expect(screen.getByText('Third todo')).toBeInTheDocument()
  })

  it('has proper accessibility structure', () => {
    render(<TodoList />)
    
    // Check heading
    const heading = screen.getByRole('heading', { name: /todo list/i })
    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe('H2')
    
    // Check input has proper type and placeholder
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('type', 'text')
    expect(input).toHaveAttribute('placeholder', 'Add a new todo...')
    
    // Check add button
    const addButton = screen.getByRole('button', { name: 'Add' })
    expect(addButton).toBeInTheDocument()
  })

  it('generates unique IDs for todos', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    
    const input = screen.getByPlaceholderText('Add a new todo...')
    
    // Add multiple todos quickly
    await user.type(input, 'Todo 1{enter}')
    await user.type(input, 'Todo 2{enter}')
    
    const checkboxes = screen.getAllByRole('checkbox')
    
    // Each todo should have a unique checkbox (React key warnings would appear if IDs weren't unique)
    expect(checkboxes).toHaveLength(2)
    expect(screen.getByText('Todo 1')).toBeInTheDocument()
    expect(screen.getByText('Todo 2')).toBeInTheDocument()
  })

  it('displays completed todos with different styling', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    
    const input = screen.getByPlaceholderText('Add a new todo...')
    await user.type(input, 'Styled todo{enter}')
    
    const checkbox = screen.getByRole('checkbox')
    const todoText = screen.getByText('Styled todo')
    
    // Complete the todo
    await user.click(checkbox)
    
    // Check styling changes
    expect(todoText).toHaveStyle('text-decoration: line-through')
    expect(todoText).toHaveStyle('color: rgb(136, 136, 136)') // #888 in rgb
  })
})
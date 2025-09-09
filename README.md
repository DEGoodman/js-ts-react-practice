# JS/TS React Practice Project

A practice project for learning and demonstrating JavaScript, TypeScript, and React fundamentals through interactive components.

## Quick Start (5 minutes)

Get up and running immediately to see the project in action:

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   - Navigate to http://localhost:5173
   - The app will open with tab navigation

4. **Try the completed components**
   - **Counter**: Click +/- buttons and reset
   - **Todo List**: Add, complete, and delete todos
   - **User Card**: See API integration with loading states

5. **Start practicing**
   - Pick a practice component (WeatherWidget, ShoppingCart, FormValidator, or DataTable)
   - Open the component file and follow the TODO comments
   - Implement step-by-step with the provided guidance

**Ready to code?** Jump to [Practice Components](#practice-components-implementation-required) below!

## Overview

This project showcases common React patterns and TypeScript usage through three interactive components:

- **Counter Component**: State management with increment/decrement/reset functionality
- **Todo List**: CRUD operations with local state management
- **User Card**: API integration with loading states and error handling

## Tech Stack

- **React 18** - UI library with hooks
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and formatting

## Project Structure

```
src/
├── components/
│   ├── Counter.tsx       # Simple counter with state management
│   ├── TodoList.tsx      # Todo list with CRUD operations
│   ├── UserCard.tsx      # API data fetching component
│   ├── WeatherWidget.tsx # Weather API integration (practice)
│   ├── ShoppingCart.tsx  # E-commerce cart functionality (practice)
│   ├── FormValidator.tsx # Form validation with useReducer (practice)
│   └── DataTable.tsx     # Data manipulation and pagination (practice)
├── App.tsx               # Main app with tab navigation
├── App.css               # Application styles
├── main.tsx              # React app entry point
└── index.css             # Global styles
```

## Components

### Implemented Components (Ready to Use)

#### Counter Component
- Demonstrates basic state management with `useState`
- Increment, decrement, and reset functionality
- Inline styling patterns

#### Todo List Component
- TypeScript interfaces for type safety
- Array state management (add, toggle, delete)
- Form handling and keyboard events
- Conditional rendering

#### User Card Component
- API integration with JSONPlaceholder
- Loading states and error handling
- `useEffect` for side effects
- Async/await patterns

### Practice Components (Implementation Required)

These components contain detailed instructional comments and TODO items to guide your implementation:

#### WeatherWidget Component
**Learning Focus**: API Integration, Error Handling, Data Transformation
- Practice async/await patterns with proper error handling
- Implement loading and error states
- Work with useEffect dependencies
- Temperature unit conversion logic
- Mock API integration with setTimeout
- **Key Concepts**: TypeScript interfaces, conditional rendering, data formatting

#### ShoppingCart Component
**Learning Focus**: Complex State Management, Performance Optimization
- Manage arrays of objects with CRUD operations
- Practice useMemo for performance optimization
- Implement filtering and category selection
- Calculate derived state (totals, quantities)
- Product catalog with add/remove functionality
- **Key Concepts**: useMemo, array methods, state calculations, component composition

#### FormValidator Component
**Learning Focus**: Advanced State Management, Form Validation
- Practice useReducer for complex state management
- Implement comprehensive form validation
- Real-time validation feedback
- TypeScript discriminated unions for actions
- Handle form submission with async operations
- **Key Concepts**: useReducer, validation patterns, TypeScript action types, controlled components

#### DataTable Component
**Learning Focus**: Data Manipulation, Table Interactions
- Filter, sort, and paginate large datasets
- Implement row selection and bulk operations
- Practice with complex data transformations
- Performance optimization for large lists
- Advanced user interactions (sorting, filtering)
- **Key Concepts**: useMemo, useCallback, data transformation, table accessibility

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd js-ts-react-practice

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev           # Start development server
npm run build         # Build for production
npm run preview       # Preview production build
npm run lint          # Run ESLint
npm run type-check    # Run TypeScript type checking

# Testing Scripts
npm test              # Run tests in watch mode
npm run test:run      # Run all tests once
npm run test:ui       # Run tests with UI interface
npm run test:coverage # Run tests with coverage report
npm run test:watch    # Run tests in watch mode (alias for npm test)
npm run test:file     # Run specific test file (use with file pattern)
```

### Testing Individual Files

To test specific components or files:

```bash
# Test a specific component
npm run test:file Counter

# Test multiple related files
npm run test:file "Counter|TodoList"

# Test all files in a directory
npm run test:file "__tests__"
```

## Development

The application uses a simple tab-based navigation to switch between different components. Each component demonstrates different React and TypeScript concepts:

1. **State Management**: Local component state with hooks
2. **Type Safety**: TypeScript interfaces and type annotations
3. **Event Handling**: User interactions and form submissions
4. **Side Effects**: API calls and lifecycle management
5. **Conditional Rendering**: Loading states and error handling

## Learning Objectives

This project helps practice:

- React functional components and hooks
- TypeScript type definitions and interfaces  
- State management patterns (useState, useReducer)
- API integration and async operations
- Event handling and user interactions
- Performance optimization (useMemo, useCallback)
- Form validation and user input handling
- Data manipulation and transformation
- Modern JavaScript features (ES6+)
- Build tools and development workflow

## Practice Implementation Guide

### Getting Started with Practice Components

1. **Choose a component** based on your current skill level:
   - **Beginner**: Start with WeatherWidget for basic API integration
   - **Intermediate**: Try ShoppingCart for state management practice
   - **Advanced**: Implement FormValidator or DataTable for complex patterns

2. **Follow the TODO comments** in each component file - they provide step-by-step guidance

3. **Read the learning objectives** at the bottom of each component file

4. **Test your implementation** by adding the component to App.tsx navigation

### Implementation Tips

- Read through the entire component file before starting
- Implement interfaces and types first
- Follow the TODO comments in order
- Test each piece of functionality as you build it
- Don't hesitate to look up React/TypeScript documentation
- Compare your implementation with the existing completed components

### Bonus Challenges

Each practice component includes bonus challenges at the bottom for additional learning opportunities once you complete the basic implementation.

## Testing

This project uses **Vitest** and **React Testing Library** for comprehensive component testing.

### Test Structure

```
src/
├── components/
│   ├── __tests__/
│   │   ├── Counter.test.tsx        # ✅ Complete test suite
│   │   ├── TodoList.test.tsx       # ✅ Complete test suite
│   │   ├── UserCard.test.tsx       # ✅ Complete test suite
│   │   ├── WeatherWidget.test.tsx  # 🔄 Practice test stubs
│   │   ├── ShoppingCart.test.tsx   # 🔄 Practice test stubs
│   │   ├── FormValidator.test.tsx  # 🔄 Practice test stubs
│   │   └── DataTable.test.tsx      # 🔄 Practice test stubs
│   └── ...
├── test/
│   └── setup.ts                    # Test configuration
└── vitest.config.ts                # Vitest configuration
```

### Running Tests

```bash
# Install dependencies first
npm install

# Run tests in watch mode (recommended for development)
npm test

# Run tests once and exit
npm run test:run

# Run tests with coverage report
npm run test:coverage

# Run tests with UI interface (browser-based)
npm run test:ui

# Test specific components
npm run test:file Counter
npm run test:file "Counter|TodoList"
```

### Completed Component Tests

The following components have comprehensive test suites you can study:

#### Counter Component Tests
- ✅ Initial rendering and state
- ✅ Button interactions (increment, decrement, reset)
- ✅ State management and updates
- ✅ Accessibility structure
- ✅ Multiple operation sequences

#### TodoList Component Tests
- ✅ Adding todos (button click and Enter key)
- ✅ Input validation and trimming
- ✅ Todo completion toggling
- ✅ Todo deletion
- ✅ Multiple todo management
- ✅ Empty state handling
- ✅ Accessibility and keyboard navigation

#### UserCard Component Tests
- ✅ Loading states
- ✅ API integration with fetch mocking
- ✅ Error handling and retry functionality
- ✅ User data display
- ✅ Refresh functionality
- ✅ Random user ID generation testing

### Practice Component Test Stubs

The practice components include test stubs with detailed TODO comments to guide your testing implementation:

#### WeatherWidget Tests (Practice)
- 🔄 API integration testing
- 🔄 Loading and error states
- 🔄 Temperature unit conversion
- 🔄 Retry functionality
- 🔄 City change handling

#### ShoppingCart Tests (Practice)
- 🔄 Product display and filtering
- 🔄 Cart operations (add, remove, quantity)
- 🔄 Total calculations with useMemo
- 🔄 Category filtering
- 🔄 State persistence during operations

#### FormValidator Tests (Practice)
- 🔄 Form validation rules
- 🔄 Real-time validation feedback
- 🔄 useReducer state management testing
- 🔄 Form submission and loading states
- 🔄 Error state management

#### DataTable Tests (Practice)
- 🔄 Data filtering and searching
- 🔄 Column sorting functionality
- 🔄 Pagination controls
- 🔄 Row selection and bulk operations
- 🔄 Performance optimization testing

### Getting Started with Testing Practice Components

1. **Remove `.skip`** from the describe block in the test file you want to work on
2. **Follow the TODO comments** in each test - they provide step-by-step guidance
3. **Run tests in watch mode** to get immediate feedback: `npm test`
4. **Implement one test at a time** - start with basic rendering tests
5. **Study the completed tests** for patterns and best practices

### Testing Best Practices

- **Test user behavior**, not implementation details
- **Use semantic queries** (`getByRole`, `getByLabelText`) over `getByTestId`
- **Test accessibility** - ensure components work with screen readers and keyboards
- **Mock external dependencies** (APIs, timers) for reliable tests
- **Write descriptive test names** that explain what behavior is being tested
- **Group related tests** in describe blocks for better organization

### Testing Tools Used

- **Vitest**: Fast test runner with ES modules support
- **React Testing Library**: User-centric testing utilities
- **jsdom**: Browser environment simulation for tests
- **@testing-library/user-event**: Realistic user interaction simulation
- **@testing-library/jest-dom**: Additional DOM matchers

## Browser Support

- Modern browsers with ES6+ support
- Chrome, Firefox, Safari, Edge (latest versions)

## License

This project is for educational purposes.
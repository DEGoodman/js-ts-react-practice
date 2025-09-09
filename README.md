# JS/TS React Practice Project

A practice project for learning and demonstrating JavaScript, TypeScript, and React fundamentals through interactive components.

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
│   ├── Counter.tsx      # Simple counter with state management
│   ├── TodoList.tsx     # Todo list with CRUD operations
│   └── UserCard.tsx     # API data fetching component
├── App.tsx              # Main app with tab navigation
├── App.css              # Application styles
├── main.tsx             # React app entry point
└── index.css            # Global styles
```

## Components

### Counter Component
- Demonstrates basic state management with `useState`
- Increment, decrement, and reset functionality
- Inline styling patterns

### Todo List Component
- TypeScript interfaces for type safety
- Array state management (add, toggle, delete)
- Form handling and keyboard events
- Conditional rendering

### User Card Component
- API integration with JSONPlaceholder
- Loading states and error handling
- `useEffect` for side effects
- Async/await patterns

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
npm run dev         # Start development server
npm run build       # Build for production
npm run preview     # Preview production build
npm run lint        # Run ESLint
npm run type-check  # Run TypeScript type checking
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
- State management patterns
- API integration and async operations
- Event handling and user interactions
- Modern JavaScript features (ES6+)
- Build tools and development workflow

## Browser Support

- Modern browsers with ES6+ support
- Chrome, Firefox, Safari, Edge (latest versions)

## License

This project is for educational purposes.
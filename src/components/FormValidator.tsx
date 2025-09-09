import React, { useState, useReducer } from 'react';

// TODO: Define the FormData interface
// HINT: The form should have fields for:
// - email: string
// - password: string
// - confirmPassword: string
// - firstName: string
// - lastName: string
// - age: number
// - agreeToTerms: boolean
interface FormData {
  // Add your form fields here
}

// TODO: Define the ValidationErrors interface
// HINT: Each field can have an error message (string) or null
interface ValidationErrors {
  // Add error fields corresponding to FormData fields
}

// TODO: Define the FormState interface for useReducer
// HINT: Should include formData, errors, isSubmitting, isValid
interface FormState {
  // Add your state properties here
}

// TODO: Define action types for the reducer
// HINT: You'll need actions like SET_FIELD, SET_ERROR, SET_SUBMITTING, RESET_FORM
type FormAction = 
  | { type: 'SET_FIELD'; field: keyof FormData; value: any }
  | { type: 'SET_ERROR'; field: keyof ValidationErrors; error: string | null }
  | { type: 'SET_SUBMITTING'; isSubmitting: boolean }
  | { type: 'RESET_FORM' }
  | { type: 'VALIDATE_ALL' };

// TODO: Create initial form state
const initialState: FormState = {
  // Initialize your state here
};

// TODO: Implement the form reducer
// HINT: Handle each action type to update the appropriate state
const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case 'SET_FIELD':
      // Update the specific field in formData
      return state;
    
    case 'SET_ERROR':
      // Update the specific error field
      return state;
    
    case 'SET_SUBMITTING':
      // Update isSubmitting status
      return state;
    
    case 'RESET_FORM':
      // Reset to initial state
      return state;
    
    case 'VALIDATE_ALL':
      // Validate all fields and update isValid
      return state;
    
    default:
      return state;
  }
};

const FormValidator: React.FC = () => {
  // TODO: Use useReducer instead of multiple useState hooks
  // HINT: const [state, dispatch] = useReducer(formReducer, initialState);
  
  // TODO: Create validation functions for each field
  const validateEmail = (email: string): string | null => {
    // Implement email validation
    // HINT: Check for basic email format using regex
    return null;
  };

  const validatePassword = (password: string): string | null => {
    // Implement password validation
    // HINT: Check for minimum length, uppercase, lowercase, numbers
    return null;
  };

  const validateConfirmPassword = (confirmPassword: string, password: string): string | null => {
    // Implement confirm password validation
    // HINT: Check if it matches the password
    return null;
  };

  const validateName = (name: string, fieldName: string): string | null => {
    // Implement name validation
    // HINT: Check for minimum length and no numbers
    return null;
  };

  const validateAge = (age: number): string | null => {
    // Implement age validation
    // HINT: Check for reasonable age range (13-120)
    return null;
  };

  // TODO: Create a function to validate a single field
  const validateField = (field: keyof FormData, value: any) => {
    // Use switch statement to validate different fields
    // Dispatch appropriate SET_ERROR actions
  };

  // TODO: Create a function to validate all fields
  const validateAllFields = () => {
    // Validate all fields and update errors
    // Update isValid based on whether there are any errors
  };

  // TODO: Handle input changes
  const handleInputChange = (field: keyof FormData, value: any) => {
    // Dispatch SET_FIELD action
    // Validate the field if it has been touched
  };

  // TODO: Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Set submitting to true
    // Validate all fields
    // If valid, simulate API call
    // Handle success/error states
    // Reset submitting state
  };

  // TODO: Handle form reset
  const handleReset = () => {
    // Dispatch RESET_FORM action
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h2>User Registration Form</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        Practice form validation with useReducer
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {/* TODO: Email Field */}
        <div>
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            value={/* email from state */}
            onChange={/* handle change */}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px'
              // Add error styling if there's an error
            }}
          />
          {/* TODO: Display email error */}
        </div>

        {/* TODO: Password Field */}
        <div>
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            id="password"
            value={/* password from state */}
            onChange={/* handle change */}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
          {/* TODO: Display password error */}
          <small style={{ color: '#666' }}>
            Must be at least 8 characters with uppercase, lowercase, and number
          </small>
        </div>

        {/* TODO: Confirm Password Field */}
        <div>
          <label htmlFor="confirmPassword">Confirm Password *</label>
          <input
            type="password"
            id="confirmPassword"
            value={/* confirmPassword from state */}
            onChange={/* handle change */}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
          {/* TODO: Display confirmPassword error */}
        </div>

        {/* TODO: First Name Field */}
        <div>
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            id="firstName"
            value={/* firstName from state */}
            onChange={/* handle change */}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
          {/* TODO: Display firstName error */}
        </div>

        {/* TODO: Last Name Field */}
        <div>
          <label htmlFor="lastName">Last Name *</label>
          <input
            type="text"
            id="lastName"
            value={/* lastName from state */}
            onChange={/* handle change */}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
          {/* TODO: Display lastName error */}
        </div>

        {/* TODO: Age Field */}
        <div>
          <label htmlFor="age">Age *</label>
          <input
            type="number"
            id="age"
            value={/* age from state */}
            onChange={/* handle change */}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
          {/* TODO: Display age error */}
        </div>

        {/* TODO: Terms Checkbox */}
        <div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="checkbox"
              checked={/* agreeToTerms from state */}
              onChange={/* handle change */}
            />
            I agree to the terms and conditions *
          </label>
          {/* TODO: Display agreeToTerms error */}
        </div>

        {/* Form Actions */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <button
            type="submit"
            disabled={/* check if submitting or invalid */}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {/* Show "Submitting..." or "Register" based on state */}
          </button>
          
          <button
            type="button"
            onClick={handleReset}
            style={{
              padding: '10px 20px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Reset
          </button>
        </div>

        {/* TODO: Form Status */}
        <div style={{ marginTop: '15px' }}>
          {/* Show validation status */}
          {/* Show success message after submission */}
        </div>
      </form>
    </div>
  );
};

export default FormValidator;

/*
LEARNING OBJECTIVES:
1. Practice with useReducer for complex state management
2. Learn comprehensive form validation patterns
3. Implement real-time validation feedback
4. Practice with TypeScript discriminated unions (action types)
5. Handle form submission and async operations
6. Learn accessibility patterns for forms
7. Practice with controlled components and event handling

IMPLEMENTATION TIPS:
- Start by implementing the reducer with all action types
- Create validation functions that return error messages or null
- Implement field-by-field validation on blur/change
- Add visual feedback for validation states
- Test all validation rules thoroughly
- Handle edge cases and user experience

BONUS CHALLENGES:
- Add debounced validation for better UX
- Implement password strength indicator
- Add custom validation rules
- Create reusable validation hooks
- Add accessibility features (ARIA labels, screen reader support)
- Implement form persistence with local storage
*/
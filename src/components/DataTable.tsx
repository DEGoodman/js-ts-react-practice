import React, { useState, useMemo, useCallback } from 'react';

// TODO: Define the User interface
// HINT: A user should have properties like:
// - id: number
// - name: string
// - email: string
// - role: 'admin' | 'user' | 'moderator'
// - status: 'active' | 'inactive' | 'pending'
// - createdAt: string (ISO date string)
// - lastLogin: string | null
interface User {
  // Add your user properties here
}

// TODO: Define the SortConfig interface
// HINT: Should specify which field to sort by and direction
interface SortConfig {
  // Add properties for field and direction
}

// TODO: Define the FilterConfig interface
// HINT: Should allow filtering by different fields
interface FilterConfig {
  // Add filter properties (search term, role filter, status filter)
}

// TODO: Define the DataTableProps interface
// HINT: Could accept initial data or be self-contained
interface DataTableProps {
  // Add props if needed, or leave empty for self-contained component
}

const DataTable: React.FC<DataTableProps> = () => {
  // TODO: Create mock user data
  // HINT: Create an array of 20-30 users with varied data
  const mockUsers: User[] = [
    // Add mock users here
    // Example: { id: 1, name: "John Doe", email: "john@example.com", role: "admin", status: "active", createdAt: "2023-01-15T10:00:00Z", lastLogin: "2024-03-01T14:30:00Z" }
  ];

  // TODO: Add state for users data
  // HINT: Initialize with mockUsers
  
  // TODO: Add state for sorting configuration
  // HINT: Track which column to sort by and direction
  
  // TODO: Add state for filtering configuration
  // HINT: Track search term, role filter, status filter
  
  // TODO: Add state for pagination
  // HINT: Track current page and items per page
  
  // TODO: Add state for selected rows
  // HINT: Track which user IDs are selected

  // TODO: Create a function to handle sorting
  // HINT: Toggle direction if same column, otherwise set new column
  const handleSort = useCallback((field: keyof User) => {
    // Implement sorting logic
  }, [/* dependencies */]);

  // TODO: Create a function to handle filtering
  const handleFilter = useCallback((filterType: keyof FilterConfig, value: any) => {
    // Implement filter logic
  }, []);

  // TODO: Create a function to handle row selection
  const handleRowSelect = useCallback((userId: number, checked: boolean) => {
    // Implement single row selection
  }, [/* dependencies */]);

  // TODO: Create a function to handle select all
  const handleSelectAll = useCallback((checked: boolean) => {
    // Implement select all logic
  }, [/* dependencies */]);

  // TODO: Use useMemo to filter and sort data
  const filteredAndSortedUsers = useMemo(() => {
    let result = [...mockUsers];

    // Apply filters
    // Filter by search term (name or email)
    // Filter by role
    // Filter by status

    // Apply sorting
    // Sort by the specified field and direction

    return result;
  }, [/* dependencies */]);

  // TODO: Use useMemo to paginate data
  const paginatedUsers = useMemo(() => {
    // Calculate start and end indices
    // Return slice of filteredAndSortedUsers
    return filteredAndSortedUsers;
  }, [/* dependencies */]);

  // TODO: Calculate pagination info
  const totalPages = Math.ceil(filteredAndSortedUsers.length / /* items per page */);
  const totalItems = filteredAndSortedUsers.length;

  // TODO: Create a function to format dates
  const formatDate = (dateString: string | null): string => {
    // Format ISO date string to readable format
    // Handle null values
    return dateString || 'Never';
  };

  // TODO: Create a function to get status badge styling
  const getStatusStyle = (status: string) => {
    // Return different styles based on status
    const baseStyle = {
      padding: '2px 8px',
      borderRadius: '12px',
      fontSize: '12px',
      fontWeight: 'bold',
    };
    
    // Add color variations based on status
    return baseStyle;
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Management Table</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        Practice data manipulation, sorting, filtering, and pagination
      </p>

      {/* Filters Section */}
      <div style={{ 
        display: 'flex', 
        gap: '15px', 
        marginBottom: '20px', 
        flexWrap: 'wrap',
        alignItems: 'center'
      }}>
        {/* TODO: Search Input */}
        <div>
          <input
            type="text"
            placeholder="Search users..."
            value={/* search term from state */}
            onChange={/* handle search change */}
            style={{
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              minWidth: '200px'
            }}
          />
        </div>

        {/* TODO: Role Filter */}
        <div>
          <select
            value={/* role filter from state */}
            onChange={/* handle role filter change */}
            style={{
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          >
            <option value="">All Roles</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="moderator">Moderator</option>
          </select>
        </div>

        {/* TODO: Status Filter */}
        <div>
          <select
            value={/* status filter from state */}
            onChange={/* handle status filter change */}
            style={{
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          >
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
          </select>
        </div>

        {/* TODO: Items per page selector */}
        <div>
          <label>Show: </label>
          <select
            value={/* items per page from state */}
            onChange={/* handle items per page change */}
            style={{
              padding: '4px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>

      {/* Results Summary */}
      <div style={{ marginBottom: '15px', color: '#666' }}>
        Showing {paginatedUsers.length} of {totalItems} users
        {/* TODO: Show selected count if any rows are selected */}
      </div>

      {/* Data Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse',
          backgroundColor: 'white',
          border: '1px solid #ddd'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa' }}>
              {/* TODO: Select All Checkbox */}
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>
                <input
                  type="checkbox"
                  checked={/* check if all visible rows are selected */}
                  onChange={/* handle select all */}
                />
              </th>

              {/* TODO: Sortable column headers */}
              {/* HINT: Each header should be clickable and show sort direction */}
              <th 
                style={{ 
                  padding: '12px', 
                  textAlign: 'left', 
                  borderBottom: '1px solid #ddd',
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
                onClick={() => handleSort('name')}
              >
                Name {/* Add sort indicator */}
              </th>

              <th 
                style={{ 
                  padding: '12px', 
                  textAlign: 'left', 
                  borderBottom: '1px solid #ddd',
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
                onClick={() => handleSort('email')}
              >
                Email {/* Add sort indicator */}
              </th>

              {/* TODO: Add more sortable columns for role, status, createdAt, lastLogin */}
            </tr>
          </thead>
          <tbody>
            {/* TODO: Render table rows */}
            {paginatedUsers.map(user => (
              <tr key={user.id} style={{ borderBottom: '1px solid #eee' }}>
                {/* TODO: Row checkbox */}
                <td style={{ padding: '12px' }}>
                  <input
                    type="checkbox"
                    checked={/* check if this row is selected */}
                    onChange={/* handle row selection */}
                  />
                </td>

                {/* TODO: User data cells */}
                <td style={{ padding: '12px' }}>{/* user.name */}</td>
                <td style={{ padding: '12px' }}>{/* user.email */}</td>
                {/* TODO: Add cells for role, status (with styling), dates */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginTop: '20px' 
      }}>
        <div>
          {/* TODO: Show current page info */}
          Page {/* current page */} of {totalPages}
        </div>

        <div style={{ display: 'flex', gap: '5px' }}>
          {/* TODO: Previous button */}
          <button
            disabled={/* check if on first page */}
            onClick={/* go to previous page */}
            style={{
              padding: '8px 12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Previous
          </button>

          {/* TODO: Page number buttons */}
          {/* HINT: Show current page and nearby pages */}

          {/* TODO: Next button */}
          <button
            disabled={/* check if on last page */}
            onClick={/* go to next page */}
            style={{
              padding: '8px 12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Next
          </button>
        </div>
      </div>

      {/* TODO: Bulk Actions (if any rows selected) */}
      {/* Show bulk action buttons when rows are selected */}
    </div>
  );
};

export default DataTable;

/*
LEARNING OBJECTIVES:
1. Practice complex data manipulation (filtering, sorting, pagination)
2. Learn performance optimization with useMemo and useCallback
3. Implement table interactions and row selection
4. Practice with derived state patterns
5. Handle large datasets efficiently
6. Learn accessibility patterns for data tables
7. Practice with TypeScript for complex data structures

IMPLEMENTATION TIPS:
- Start with mock data generation
- Implement filtering before sorting and pagination
- Use useMemo for expensive calculations
- Add proper TypeScript types for all data transformations
- Consider performance implications of large datasets
- Test with different data sizes and edge cases

BONUS CHALLENGES:
- Add column resizing and reordering
- Implement virtual scrolling for large datasets
- Add data export functionality (CSV, JSON)
- Create column visibility toggles
- Add inline editing capabilities
- Implement advanced filters (date ranges, multi-select)
- Add keyboard navigation support
*/
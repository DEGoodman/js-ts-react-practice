import React, { useState, useMemo } from 'react';

// TODO: Define the Product interface
// HINT: A product should have:
// - id: number
// - name: string
// - price: number
// - image: string (URL)
// - category: string
interface Product {
  // Add your interface properties here
}

// TODO: Define the CartItem interface
// HINT: A cart item should extend Product and add:
// - quantity: number
interface CartItem {
  // Add your interface properties here
}

// TODO: Define the ShoppingCartProps interface (if needed)
// HINT: This component might not need props, or you could add:
// - initialProducts: Product[] (list of available products)
interface ShoppingCartProps {
  // Add your props here or leave empty
}

const ShoppingCart: React.FC<ShoppingCartProps> = () => {
  // TODO: Create mock product data
  // HINT: Create an array of 5-6 products with different categories
  const mockProducts: Product[] = [
    // Add your mock products here
    // Example: { id: 1, name: "Laptop", price: 999.99, image: "laptop.jpg", category: "Electronics" }
  ];

  // TODO: Add state for cart items
  // HINT: Use useState with CartItem array
  
  // TODO: Add state for selected category filter
  // HINT: Use useState with string type, default to "All"

  // TODO: Create a function to add items to cart
  // HINT: Check if item already exists, if yes increment quantity, if no add new item
  const addToCart = (product: Product) => {
    // Implement add to cart logic
  };

  // TODO: Create a function to remove items from cart
  // HINT: Filter out the item with matching id
  const removeFromCart = (productId: number) => {
    // Implement remove from cart logic
  };

  // TODO: Create a function to update item quantity
  // HINT: Map through cart items and update quantity for matching id
  const updateQuantity = (productId: number, newQuantity: number) => {
    // Handle quantity updates
    // If newQuantity is 0, remove the item
  };

  // TODO: Create a function to clear the entire cart
  const clearCart = () => {
    // Implement clear cart logic
  };

  // TODO: Use useMemo to calculate total price
  // HINT: Reduce cart items to sum (price * quantity)
  const totalPrice = useMemo(() => {
    // Calculate and return total price
    return 0;
  }, [/* add dependencies */]);

  // TODO: Use useMemo to calculate total items count
  // HINT: Reduce cart items to sum all quantities
  const totalItems = useMemo(() => {
    // Calculate and return total item count
    return 0;
  }, [/* add dependencies */]);

  // TODO: Use useMemo to filter products by category
  // HINT: Filter mockProducts based on selectedCategory
  const filteredProducts = useMemo(() => {
    // Filter products by category
    return mockProducts;
  }, [/* add dependencies */]);

  // TODO: Get unique categories from products
  // HINT: Use Set to get unique categories, then convert to array
  const categories = useMemo(() => {
    // Extract unique categories from mockProducts
    return ['All'];
  }, []);

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      {/* Products Section */}
      <div style={{ flex: 2 }}>
        <h2>Products</h2>
        
        {/* TODO: Add category filter dropdown */}
        <div style={{ marginBottom: '20px' }}>
          <label>Category: </label>
          <select 
            value={/* selected category */} 
            onChange={/* handle category change */}
          >
            {/* TODO: Map through categories to create options */}
          </select>
        </div>

        {/* TODO: Display filtered products in a grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
          gap: '15px' 
        }}>
          {/* TODO: Map through filteredProducts and render each product */}
          {/* Each product should show:
              - Product image (or placeholder)
              - Product name
              - Product price
              - Add to Cart button
          */}
        </div>
      </div>

      {/* Cart Section */}
      <div style={{ flex: 1, borderLeft: '1px solid #ddd', paddingLeft: '20px' }}>
        <h2>Shopping Cart ({/* total items count */})</h2>
        
        {/* TODO: Handle empty cart state */}
        {/* HINT: Show message when cart is empty */}
        
        {/* TODO: Display cart items */}
        <div style={{ marginBottom: '20px' }}>
          {/* TODO: Map through cart items and render each item */}
          {/* Each cart item should show:
              - Item name
              - Price
              - Quantity controls (-, quantity, +)
              - Remove button
              - Subtotal (price * quantity)
          */}
        </div>

        {/* Cart Summary */}
        <div style={{ 
          borderTop: '1px solid #ddd', 
          paddingTop: '15px',
          fontWeight: 'bold'
        }}>
          {/* TODO: Display total price */}
          <div>Total: $0.00</div>
          
          {/* TODO: Add action buttons */}
          <div style={{ marginTop: '15px' }}>
            {/* Clear Cart button */}
            {/* Checkout button (can just show alert) */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

/*
LEARNING OBJECTIVES:
1. Practice with complex state management (arrays of objects)
2. Learn useMemo for performance optimization
3. Implement CRUD operations on arrays
4. Practice with derived state calculations
5. Work with filtering and searching
6. Learn component composition and layout
7. Practice with TypeScript interfaces for related data types

IMPLEMENTATION TIPS:
- Start by creating mock product data
- Implement add/remove cart functionality first
- Use array methods like map, filter, reduce effectively
- Add proper TypeScript typing for all functions
- Style the component to look like a real shopping cart
- Test edge cases (empty cart, quantity 0, etc.)

BONUS CHALLENGES:
- Add search functionality for products
- Implement local storage to persist cart
- Add product ratings and reviews
- Implement discount codes
- Add animation for cart updates
- Make the layout responsive
*/
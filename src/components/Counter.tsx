import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Counter Component</h2>
      <p style={{ fontSize: '2rem', margin: '1rem 0' }}>Count: {count}</p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}

export default Counter
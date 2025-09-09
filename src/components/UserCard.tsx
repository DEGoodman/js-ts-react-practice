import { useState, useEffect } from 'react'

interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
  company: {
    name: string
  }
}

const UserCard = () => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchRandomUser = async () => {
    setLoading(true)
    setError(null)
    try {
      const randomId = Math.floor(Math.random() * 10) + 1
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${randomId}`)
      if (!response.ok) {
        throw new Error('Failed to fetch user')
      }
      const userData = await response.json()
      setUser(userData)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRandomUser()
  }, [])

  if (loading) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>User Card</h2>
        <p>Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>User Card</h2>
        <p style={{ color: 'red' }}>Error: {error}</p>
        <button onClick={fetchRandomUser}>Try Again</button>
      </div>
    )
  }

  return (
    <div>
      <h2>User Card</h2>
      {user && (
        <div style={{ 
          border: '1px solid #ddd', 
          borderRadius: '8px', 
          padding: '1rem', 
          marginTop: '1rem' 
        }}>
          <h3>{user.name}</h3>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
        </div>
      )}
      
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <button onClick={fetchRandomUser}>Load New User</button>
      </div>
    </div>
  )
}

export default UserCard
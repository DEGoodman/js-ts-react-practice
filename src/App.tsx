import { useState } from 'react'
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import UserCard from './components/UserCard'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('counter')

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'counter':
        return <Counter />
      case 'todo':
        return <TodoList />
      case 'user':
        return <UserCard />
      default:
        return <Counter />
    }
  }

  return (
    <div className="app">
      <h1>JS/TS React Practice Project</h1>
      
      <nav className="nav">
        <button 
          className={activeTab === 'counter' ? 'active' : ''}
          onClick={() => setActiveTab('counter')}
        >
          Counter
        </button>
        <button 
          className={activeTab === 'todo' ? 'active' : ''}
          onClick={() => setActiveTab('todo')}
        >
          Todo List
        </button>
        <button 
          className={activeTab === 'user' ? 'active' : ''}
          onClick={() => setActiveTab('user')}
        >
          User Card
        </button>
      </nav>

      <main className="main-content">
        {renderActiveComponent()}
      </main>
    </div>
  )
}

export default App
import TaskList from './components/TaskList'
import Counter from './components/Counter'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>⚛️ React: Состояние (useState)</h1>
        <p className="subtitle">
          Массивы, объекты, фильтрация, иммутабельность
        </p>
      </header>

      <main className="main">
        <Counter />
        <TaskList />
      </main>
    </div>
  )
}

export default App

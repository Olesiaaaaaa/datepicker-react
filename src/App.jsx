import TaskList from './components/TaskList'

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
        <TaskList />
      </main>
    </div>
  )
}

export default App

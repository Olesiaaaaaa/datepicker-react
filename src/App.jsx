import Counter from './components/Counter'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>⚛️ React: Независимые состояния</h1>
        <p className="subtitle">
          Каждый экземпляр компонента хранит своё состояние
        </p>
      </header>

      <main className="main counters-grid">
        <Counter label="Проект А" />
        <Counter label="Проект Б" />
        <Counter label="Проект В" />
      </main>
    </div>
  )
}

export default App

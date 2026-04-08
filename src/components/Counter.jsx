import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  const increment = () => setCount((prev) => prev + step)
  const decrement = () => setCount((prev) => prev - step)
  const reset = () => setCount(0)

  return (
    <div className="counter-card">
      <h3>🔢 Счётчик</h3>

      <div className="counter-display">
        <span className={`count ${count < 0 ? 'negative' : ''}`}>{count}</span>
      </div>

      <div className="counter-controls">
        <button onClick={decrement} className="btn btn-danger">
          −
        </button>
        <button onClick={reset} className="btn btn-secondary">
          ⟲ Сброс
        </button>
        <button onClick={increment} className="btn btn-success">
          +
        </button>
      </div>

      <div className="counter-step">
        <label>
          Шаг:
          <input
            type="number"
            min="1"
            max="10"
            value={step}
            onChange={(e) =>
              setStep(Math.max(1, Math.min(10, Number(e.target.value) || 1)))
            }
          />
        </label>
      </div>

      <div className="counter-info">
        {count === 0 && '🎯 Начни считать!'}
        {count > 0 && `✅ Плюс: ${count}`}
        {count < 0 && `⚠️ Минус: ${Math.abs(count)}`}
      </div>
    </div>
  )
}

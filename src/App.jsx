import { useState } from 'react'
import DatePicker from './components/DatePicker'
import WikiLinks from './components/WikiLinks'

function App() {
  const [selectedDate, setSelectedDate] = useState('15-02-2026')

  const handleChange = (dateInfo) => {
    console.log('📅 Дата изменена:', dateInfo)
    setSelectedDate(dateInfo?.formatted || '')
  }

  return (
    <div className="app">
      <div className="beta-badge">🔥 Бета-версия</div>

      <header className="header">
        <h1>📅 DatePicker</h1>
        <p className="subtitle">React + JSX + Vite</p>
      </header>

      <main className="main">
        <div className="demo-card">
          <h2>Выберите дату:</h2>

          <DatePicker
            value={selectedDate}
            onChange={handleChange}
            min="2024-01-01"
            max="2027-12-31"
            locale="ru"
          />

          <div className="output">
            {selectedDate ? (
              <>
                ✅ <strong>{selectedDate}</strong>
              </>
            ) : (
              '👆 Кликни на дату или введи вручную'
            )}
          </div>

          <div className="info-badge">
            💡 Формат: <strong>ДД-ММ-ГГГГ</strong> • Пример: 25-12-2026
          </div>
        </div>

        <WikiLinks />
      </main>

      <footer className="footer">
        📁 Папка: <code>React + JSX/</code>
        <br />
        🚀 Запуск: <code>npm run dev</code>
        <br />
        🔗 URL: <code>http://localhost:5174/</code>
      </footer>
    </div>
  )
}

export default App

import { useState, useEffect, useRef } from 'react'
import {
  format,
  parse,
  startOfMonth,
  endOfMonth,
  addMonths,
  subMonths,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameDay,
  isToday,
  isSameMonth,
} from 'date-fns'
import { ru } from 'date-fns/locale'

export default function DatePicker({
  value = '',
  onChange,
  min = null,
  max = null,
  locale = 'ru',
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [displayDate, setDisplayDate] = useState(startOfMonth(new Date()))
  const [inputValue, setInputValue] = useState(value)
  const pickerRef = useRef(null)
  const currentLocale = locale === 'ru' ? ru : undefined

  useEffect(() => {
    setInputValue(value)
    if (value) {
      const parsed = parse(
        value,
        value.includes('-') && value.length === 10
          ? 'dd-MM-yyyy'
          : 'yyyy-MM-dd',
        new Date(),
      )
      if (!isNaN(parsed.getTime())) setDisplayDate(startOfMonth(parsed))
    }
  }, [value])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target))
        setIsOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isDateDisabled = (date) => {
    if (min && date < parse(min, 'yyyy-MM-dd', new Date())) return true
    if (max && date > parse(max, 'yyyy-MM-dd', new Date())) return true
    return false
  }

  const handleDateClick = (date) => {
    if (isDateDisabled(date)) return
    const formatted = format(date, 'dd-MM-yyyy', { locale: currentLocale })
    setInputValue(formatted)
    setIsOpen(false)
    if (onChange) onChange({ date, timestamp: date.getTime(), formatted })
  }

  const handleInputChange = (e) => {
    const val = e.target.value
    setInputValue(val)
    if (!val) {
      if (onChange) onChange(null)
      return
    }
    const parsed = parse(val, 'dd-MM-yyyy', new Date())
    if (!isNaN(parsed.getTime()) && !isDateDisabled(parsed)) {
      setDisplayDate(startOfMonth(parsed))
      if (onChange)
        onChange({ date: parsed, timestamp: parsed.getTime(), formatted: val })
    }
  }

  const prevMonth = () => setDisplayDate(subMonths(displayDate, 1))
  const nextMonth = () => setDisplayDate(addMonths(displayDate, 1))

  const renderDays = () => {
    // 🔑 ИСПРАВЛЕНИЕ: берем начало и конец МЕСЯЦА, а потом их недель
    const monthStart = startOfMonth(displayDate)
    const monthEnd = endOfMonth(displayDate)
    const start = startOfWeek(monthStart, {
      locale: currentLocale,
      weekStartsOn: 1,
    })
    const end = endOfWeek(monthEnd, { locale: currentLocale, weekStartsOn: 1 })
    const days = eachDayOfInterval({ start, end })
    const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

    return (
      <>
        {weekDays.map((day) => (
          <div key={day} className="day-name">
            {day}
          </div>
        ))}
        {days.map((date, idx) => {
          const isCur = isSameMonth(date, displayDate)
          const isSel = value
            ? isSameDay(date, parse(value, 'dd-MM-yyyy', new Date()))
            : false
          const isTod = isToday(date)
          const dis = isDateDisabled(date)
          return (
            <div
              key={idx}
              className={`day ${!isCur ? 'other-month' : ''} ${isSel ? 'selected' : ''} ${isTod ? 'today' : ''} ${dis ? 'disabled' : ''}`}
              onClick={() => !dis && handleDateClick(date)}
            >
              {format(date, 'd')}
            </div>
          )
        })}
      </>
    )
  }

  return (
    <div className="date-picker" ref={pickerRef}>
      <input
        type="text"
        className="date-input"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        placeholder="ДД-ММ-ГГГГ"
      />
      {isOpen && (
        <div className="calendar" onClick={(e) => e.stopPropagation()}>
          <div className="calendar-header">
            <button type="button" onClick={prevMonth}>
              ‹
            </button>
            <span className="month">
              {format(displayDate, 'LLLL yyyy', { locale: currentLocale })}
            </span>
            <button type="button" onClick={nextMonth}>
              ›
            </button>
          </div>
          <div className="grid">{renderDays()}</div>
        </div>
      )}
    </div>
  )
}

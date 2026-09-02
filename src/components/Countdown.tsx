'use client'

import { useEffect, useState } from 'react'

const DURATION = 10 * 24 * 60 * 60 * 1000
const STORAGE_KEY = 'mygrid_countdown_start'

function getStartTime(): number {
  if (typeof window === 'undefined') return Date.now()
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored) {
    const start = Number(stored)
    if (Date.now() - start < DURATION) return start
  }
  const now = Date.now()
  localStorage.setItem(STORAGE_KEY, String(now))
  return now
}

function getTimeLeft(target: number) {
  const diff = Math.max(0, target - Date.now())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export default function Countdown() {
  const [time, setTime] = useState(() => {
    const start = getStartTime()
    return getTimeLeft(start + DURATION)
  })

  useEffect(() => {
    const start = getStartTime()
    const target = start + DURATION

    const id = setInterval(() => {
      const left = getTimeLeft(target)
      setTime(left)
      if (left.days === 0 && left.hours === 0 && left.minutes === 0 && left.seconds === 0) {
        clearInterval(id)
        localStorage.removeItem(STORAGE_KEY)
        setTimeout(() => {
          const newStart = getStartTime()
          setTime(getTimeLeft(newStart + DURATION))
        }, 1500)
      }
    }, 1000)

    return () => clearInterval(id)
  }, [])

  const done = time.days === 0 && time.hours === 0 && time.minutes === 0 && time.seconds === 0

  if (done) return <span style={{ fontFamily: 'var(--font-pixel)' }}>LAUNCHING NOW</span>

  return (
    <span style={{ fontFamily: 'var(--font-pixel)', letterSpacing: '0.04em' }}>
      {time.days}d {time.hours}h {time.minutes}m {time.seconds}s
    </span>
  )
}

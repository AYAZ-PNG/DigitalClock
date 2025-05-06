import { useEffect, useState } from 'react'
import './App.css'

function DigitalClockApp() {
  const [clock, setClock] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setClock(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatClock = (clock) => {
      return clock.toLocaleTimeString()
  }

  return (
    <>
      <div style={container}>
        <h1 style={timerStyle}>{formatClock(clock)}</h1>
      </div>
    </>
  )
}

export default DigitalClockApp

const container = {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282c34",
}

const timerStyle = {
    fontSize: "5rem",
    color: "#61dafb",
    fontFamily: "monospace",
};
import { useState } from 'react'
import './App.css'
import useTimer from './useTimer'


function App() {
  const[timer,isRunning,startTimer,stopTimer,resetTimer] = useTimer(5);

  return (
    <>
      <h1>{timer}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </>
  )
}

export default App

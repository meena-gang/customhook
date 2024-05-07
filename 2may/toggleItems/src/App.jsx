import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useToggle from './useToggle'

function App() {
  const[val, toggleVal] = useToggle(["A", "B", "C"], 1);


  return (
    <>
     <h1>{val}</h1> 
     <button onClick={toggleVal}>Toggle</button>
    </>
  )
}

export default App

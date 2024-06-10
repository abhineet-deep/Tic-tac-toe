import { useState } from 'react'
import './App.css'
import Board from './Game/board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Board/>
    </>
  )
}

export default App

import { useState } from 'react'
import Lottery from './component/Lottery'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Lottery />
    </>
  )
}

export default App

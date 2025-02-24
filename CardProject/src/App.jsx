import { useState } from 'react'
import './App.css'
import CardTab from './component/CardTab'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <CardTab />
    </>
  )
}

export default App

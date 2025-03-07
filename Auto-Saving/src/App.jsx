import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inputfield from './component/Inputfield'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Inputfield />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'
import CommentsForm from './CommentsForm'
import Comments from './Comments'
import Counter from './Counter'
import Joker from './Joker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      {/* <Comments /> */}
      {/* <Counter /> */}
      <Joker />

    </>
  )
}

export default App

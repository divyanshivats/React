import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false);


  
  return (
    <>
    <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} min-h-screen flex items-center justify-center`}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center px-4 py-2 rounded-full bg-gray-300"
      >
        <span className="mr-3">{darkMode ? "🌙" : "☀️"}</span>
        <div
          className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${
            darkMode ? "translate-x-0" : "translate-x-2"
          }`}
        ></div>
      </button>
    </div>

    </>
  )
}

export default App

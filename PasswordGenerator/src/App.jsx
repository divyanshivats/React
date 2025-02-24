import { useCallback, useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState(' ')

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str += '0123456789'
    if(charAllowed) str += '!@#$%^&*()_+'

    for(let i=1; i<length; i++){
      const char = Math.floor(Math.random()* str.length +1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed])
  // params jo kam change ho

  useEffect(() => {
    generatePassword();
  },[length, numAllowed, charAllowed]) // we use params jinke change hone pr
  // password geenrate ho

  const passwordRef = useRef()

  const copyPassword = ()=>{
    window.navigator.clipboard.writeText(password) // copy a password
    passwordRef.current?.select()
  }

 

  return (
    <div className='w-full max-w-md mx-auto shadow-lg
    'rounded-lg px-4 py-8 my-20 bg-gray-800 text-orange-500>
      <h1 className='text-white text-center my-3'>
          Password Generator
      </h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value = {password}
          className='outline-none w-full py-1 px-3 bg-white'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button className='outline-none bg-blue-600 text-white
                  px-3 py-1 shrink-0'
                  onClick={copyPassword}>
          Copy
          </button>
      </div>
      <div className='flex text-sm gap-x-3'>
        <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer' 
            onChange={(e) => setLength(e.target.value)}
            name =""
            id=''
           
            />
            <label className='text-white' htmlFor="length">Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numAllowed}
            className='cursor-pointer' 
            onChange={(e) => setNumAllowed( (prev) => !prev)}
            name =""
            id=''

            />
            <label className='text-white' htmlFor="Number">Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={charAllowed}
            className='cursor-pointer' 
            onChange={(e) => setCharAllowed( (prev) => !prev)}
            name =""
            id=''

            />
            <label className='text-white' htmlFor="Number">Character</label>
        </div>
      </div>
    </div>
  )
}

export default App

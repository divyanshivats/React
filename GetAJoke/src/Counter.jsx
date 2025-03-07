import React, { useEffect, useState } from 'react'

function Counter() {
    let [count, setCount] = useState(0)

    useEffect(function printSomething() {
        console.log('this is a side-effect');
        
    }, [count])
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount((count) => count+2)}>click me</button>
    </div>
  )
}

export default Counter

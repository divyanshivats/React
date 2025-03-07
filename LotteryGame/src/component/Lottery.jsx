import React, { useEffect, useState } from 'react'

function Lottery() {
    const [ticket, setTicket] = useState(0)
    const [won, setWon] = useState(null)

    const getTicket = () =>{
        const newticket = Math.floor(Math.random()*200 +1)
        setTicket(newticket)  
    }
    useEffect( () =>{
        let sum =0
        let tempticket = ticket
        while (tempticket > 0){
            sum += tempticket%10
            tempticket = Math.floor(tempticket / 10);
        }
        setWon(sum === 15)

    }, [ticket])

  return (
    <div>
      <h2>Lottery Game</h2>
      <button
      onClick={getTicket}
      >Generate your ticket!</button>
      <p>Your ticket number: {ticket}</p>
        {/* Only show message if won is not null */}
        {won !== null && (
                <h3>{won ? "Congratulations! You won the lottery." : "Oops! Better luck next time."}</h3>
        )}


    </div>
  )
}

export default Lottery

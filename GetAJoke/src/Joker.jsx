import React, { useEffect } from 'react'
import { useState} from 'react';


function Joker() {
    let [joke, setJoke] = useState({});

    const URL = "https://official-joke-api.appspot.com/random_joke";

      const getNewJoke = async () => {
        let response = await fetch(URL)
        let jsonResponse = await response.json()
        console.log(jsonResponse);
        setJoke({setup: jsonResponse.setup, 
            punchline: jsonResponse.punchline
        })
    }
    useEffect(() => 
        { 
            async function getFirstJoke() {
        let response = await fetch(URL)
        let jsonResponse = await response.json()
        console.log(jsonResponse);
        setJoke({setup: jsonResponse.setup, 
            punchline: jsonResponse.punchline
        })
    }
    getFirstJoke();
}, []);
  return (
    <div>
      <h3>
        Joker!
      </h3>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
      <button onClick={getNewJoke}>Get Joke!</button>
    </div>
  )
}

export default Joker

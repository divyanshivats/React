import { useState, useEffect } from "react"

export default function Inputfield(){
    const [text, setText] = useState("")

    

    useEffect( () =>{
        const savedtext = localStorage.getItem("autosave")
        if(savedtext) setText(savedtext)
    }, [])

    useEffect( () => {
        localStorage.setItem("autosave", text)
    }, [text])

    return(
        <div>
            <h2>Auto-Saving Input</h2>
            <input type="text
            " value={text}
            onChange={(e) => setText(e.target.value)} />
            <p>you text: {text}</p>
        </div>
    )
}
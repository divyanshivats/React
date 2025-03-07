import { useState } from "react"

export default function LudoBoard(){
    let [moves, setMoves] = useState({blue: 0, red: 0, yellow: 0, green: 0})
    let [arr, setArr] = useState(["no moves "])
    const updateMove = (color) => {
        setMoves(prevMoves => ({
            ...prevMoves,
            [color]: prevMoves[color] + 1
        }));

        arr.push(`${color} moves`)
        setArr(arr)
        console.log(arr);
        
    };

    
    return(
        <div>
            <p>Game begins!</p>
            <p>{arr}</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button style={{backgroundColor: "blue"}}
                onClick={() => updateMove("blue")}
                >+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{backgroundColor: "yellow", color: "black"}}
                onClick={() => updateMove("yellow")}
                >+1</button>
                <p>Green moves = {moves.green}</p>
                <button style={{backgroundColor: "green"}}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style={{backgroundColor: "red"}}>+1</button>
            </div>
        </div>
    )
}
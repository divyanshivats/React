import { useEffect, useState } from "react";


export default function LikeButton(){
    let [isLiked, setIsLiked] = useState(false);

    const toggleLike = () =>{
        console.log('incoming', isLiked);
        
        setIsLiked(!isLiked);
    }
    useEffect( () => {
        console.log('outgoing', isLiked);
    }, [isLiked])
    return(
        <div>
            <p onClick={toggleLike}>
                {isLiked ? <i className="fa-solid fa-heart"></i>: <i className="fa-regular fa-heart"></i>}
            </p>
        </div>
    )
}
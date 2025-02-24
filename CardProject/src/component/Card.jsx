import './Card.css'
import Price from './price'

function Card({title,idx, functions}){
    let oldPrices =['12,495', '12,456', '90,67']
    let newPrices =['8,999', '9,199', '8999']
    
    return(
        <>
           
            <div className="card">
                <h2>{title}</h2>
                <ul>{functions?.map((f, index) => <li key={index}>{f}</li>)}</ul>

                <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />

            </div>
           
        </>
    )
}
export default Card
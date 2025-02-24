import Card from "./Card.jsx";
import './CardTab.css'
function CardTab(){

    let styles = {
      display: "flex",
      flexWrap: "wrap"
    };
    return (

      <>
      <p>Blockbuster deals on Computer Accesssories</p>
        <div style={styles}>

        <Card title="Logitech MX Master 35" 
        idx={0}
        functions = {['8,00 DPI', '5 Programmable Buttons']}
        />
        <Card title="Apple Pencil(2nd Gen)" 
        functions = {['8,00 DPI', '5 Programmable Buttons']}
        idx={1}
        />
         <Card title="Zebronics Zeb TRansformer" 
        functions = {['8,00 DPI', '5 Programmable Buttons']}
        idx={2}
        />
    
        </div>
        </>
      )
}
export default CardTab
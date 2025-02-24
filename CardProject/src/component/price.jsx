export default function Price({oldPrice, newPrice}){
   let styles = {
    backgroundColor: "yellow",
    height: "40px",
    width: "300px",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",


   }
    return (
        <div style={styles}>
            <span style={{ textDecoration: "line-through" }}>{oldPrice}</span> &nbsp; 
            <span style={{ fontWeight: "bold", color: "red" }}>{newPrice}</span>
        </div>
    );
}
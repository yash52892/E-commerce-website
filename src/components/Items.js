import {Button } from "react-bootstrap";
const Items = (props) => {
  return (
    <>
    <section className="container">
    {props.items.map((item)=>(
      <div style={{display: "grid", boxSizing: "border-box"}}>
        <div>
        <h3>{item.title}</h3>
        <img alt={item.title} src={item.imageUrl}/>  
        </div>
        <div style={{display: "flex", justifyContent:"space-between"}}>
        <span>Rs. {item.price} </span> 
        <Button variant="primary" size="sm" style={{display:"flex"}}>Add to Cart</Button>
        </div>
      </div>
))}
    </section>
    </>
  );
};

export default Items;

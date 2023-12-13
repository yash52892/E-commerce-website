import React, { useContext } from "react";
import {Button } from "react-bootstrap";
import CartContext from "../Store/CartContext";

const Display=(props)=>{
    const cart=useContext(CartContext);
const addCartHandler=()=>{
    cart.addItem(props);
    console.log(props);
}
return(
    <section className="container">
      <div style={{display: "grid", boxSizing: "border-box"}}>
        <div>
        <h3>{props.title}</h3>
        <img alt={props.title} src={props.url}/>  
        </div>
        <div style={{display: "flex", justifyContent:"space-between"}}>
        <span>Rs. {props.price} </span> 
        <Button variant="primary" size="sm" style={{display:"flex"}} onClick={addCartHandler}>Add to Cart</Button>
        </div>
      </div>
    </section>
)
}

export default Display;

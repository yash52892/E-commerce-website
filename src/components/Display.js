import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../Store/CartContext";
import { Link } from "react-router-dom";
import classes from "./Display.module.css";
import { useRef } from "react";
import TokenContext from "../Store/TokenContext";


const Display = (props) => {
  const cart = useContext(CartContext);
  const q = useRef(1);
  
  const tok=useContext(TokenContext);
  const email_id=tok.emailId.replace(/[^\w ]/g,'');

  const addCartHandler = async () => {
    const quantities = q.current.value;
    
    const result = await fetch(
      `https://crudcrud.com/api/f462e23384b74d89a06cf27a32e60caa/cart${email_id}`,
      {
        method: "POST",
        body: JSON.stringify({
          title: props.title,
          quantity: quantities,
          price: props.price,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      const data=await result.json();
      cart.addItem({
        id: data._id,
        title: props.title,
        quantity: quantities,
        price: props.price,
      });

    
}

  return (
    <section className={classes.container}>
      <div className={classes.item}>
        <Link to={`/product/${props.price}`}>
          <h3>{props.title}</h3>
          <img alt={props.title} src={props.url} />
          <h5>Rs. {props.price} </h5>
        </Link>
      </div>
      <div className={classes.item}>
        <form className={classes.item}>
          <label>Quantity</label>
          <input type="number" defaultValue={1} ref={q}></input>
          <Button
            variant="primary"
            size="sm"
            style={{ display: "flex" }}
            onClick={addCartHandler}
          >
            Add to Cart
          </Button>
        </form>
      </div>
      <div className={classes.item}></div>
    </section>
  );
};

export default Display;

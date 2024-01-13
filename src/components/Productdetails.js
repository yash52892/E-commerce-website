import { useParams } from "react-router-dom";
import {productsArr} from "../pages/Product";
import classes from "./Display.module.css";
import { Button } from "react-bootstrap";
import { useRef, useContext } from "react";
import CartContext from "../Store/CartContext";

const Productdetails=(props)=>{
   const param=useParams();

   const cart = useContext(CartContext);
  const q=useRef(1);
  
  const addCartHandler = () => {
   const quantity=q.current.value;
    cart.addItem(props,quantity);
    
  };
   
   const item=productsArr.filter((product)=>{
      return product.price===parseInt(param.pId);
   })

     return(
      <section className={classes.container}>
      <img src={item[0].imageUrl} alt="text"/>
      <div>
     <h4>Rs. {item[0].price}</h4> 
     <h3>{item[0].title}</h3>
     <div className={classes.item}>
        <form className={classes.item}>
          <label>Quantity</label>
          <input type="number" defaultValue={1} ref={q}></input>
        </form>
      </div>
     <Button
          variant="primary"
          size="sm"
          style={{ display: "flex" }}
          onClick={addCartHandler}
        >
          Add to Cart
        </Button>
     </div>
     </section>
     )
}

export default Productdetails;

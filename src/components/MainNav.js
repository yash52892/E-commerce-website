import { Nav, Navbar, Container } from "react-bootstrap";
import CartContext from "../../Store/CartContext";
import Cart from "../Cart/Cart";
import Sub from "../Sub";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import classes from "./MainNav.module.css";
import TokenContext from "../../Store/TokenContext";


const MainNav = (props) => {
    const cart = useContext(CartContext);
    const tok=useContext(TokenContext);
    const email_id=tok.emailId.replace(/[^\w ]/g,'');

    const[items, setItems]=useState([])

  const handleShow=async ()=>{
    const res=await fetch(`https://crudcrud.com/api/f462e23384b74d89a06cf27a32e60caa/cart${email_id}`);
    const response=await res.json();
    setItems(response)
    cart.cartShow();
    // console.log(data);
  }
 
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className={classes.meauto}>
            <Link to="/home">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
            <Link to="/contact">Contact Us</Link>
            <button variant="dark" onClick={handleShow}>
              Cart
              {/* <Badge>{cart.items.length}</Badge> */}
              <Cart cartItems={items}/>
            </button>
          </Nav>
        </Container>
      </Navbar>
      <Sub/>
    </>
  );
};

export default MainNav;

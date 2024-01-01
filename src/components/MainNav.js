import { Nav, Navbar, Container, Badge } from "react-bootstrap";
import CartContext from "../Store/CartContext";
import Cart from "./Cart";
import Sub from "./Sub";
import { Link } from "react-router-dom";
import { useContext } from "react";
import classes from "./MainNav.module.css";


const MainNav = (props) => {
    const cart = useContext(CartContext);
  const cartHideHandler=()=>{
    props.onnavHide();
  }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container  >
          <Nav className={classes.meauto}>
            <Link to="/home">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/about">About</Link>
      <Link to="/contact">Contact Us</Link>
            <button variant="dark" onClick={props.onnavShow}>
              Cart
              <Badge>{cart.items.length}</Badge>
              <Cart cartshow={props.navshow} onNavHide={cartHideHandler}/>
            </button>
          </Nav>
        </Container>
      </Navbar>
      <Sub/>
    </>
  );
};

export default MainNav;

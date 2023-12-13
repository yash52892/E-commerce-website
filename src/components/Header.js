import { Nav, Navbar, Container, Badge } from "react-bootstrap";
import CartContext from "../Store/CartContext";
import { useContext } from "react";

const Header = (props) => { 
  const cart=useContext(CartContext);
 
const handleShow=()=>{
  props.on();
}
const handleAbout=()=>{
  props.aboutOn()
}
  return (
    
    <Navbar bg="dark" data-bs-theme="dark" className="justify-content-center">
      <Container>
        <Nav className="me-auto">
        
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Store</Nav.Link>
          <Nav.Link href="./about" onClick={handleAbout}>About</Nav.Link>
          
          <button variant="dark" onClick={handleShow}>
            Cart
            <Badge>{cart.items.length}</Badge>
          </button>
        </Nav>
      </Container>
    </Navbar>
   
  );
};

export default Header;

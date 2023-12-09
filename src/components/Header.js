import { Nav, Navbar, Container, Badge } from "react-bootstrap";

const Header = (props) => {  
const handleShow=()=>{
  props.on();
}

  return (
    
    <Navbar bg="dark" data-bs-theme="dark" className="justify-content-center">
      <Container>
        <Nav className="me-auto">
        
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Store</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
          
          <button variant="dark" onClick={handleShow}>
            Cart
            <Badge>0</Badge>
          </button>
        </Nav>
      </Container>
    </Navbar>
   
  );
};

export default Header;

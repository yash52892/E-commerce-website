import Cart from "./Cart";
import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="justify-content-center">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Store</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
          <Cart />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

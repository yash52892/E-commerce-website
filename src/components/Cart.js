import { Modal, Badge, Button} from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import CartContext from "../Store/CartContext";
import { useContext } from "react";

const Cart=(props)=>{
    const cart=useContext(CartContext);
    const cartHideHandler=()=>{
      console.log("hide")
      props.onNavHide();
    }
    return(
        <Modal show={props.cartshow} onHide={cartHideHandler}>
        <h2>Cart</h2>
       {cart.items.map((item) => (
        <ListGroup as="ol" numbered>
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            {item.title}    
          </div>
          <button >+</button>
          <button>-</button>
          <Badge bg="primary" pill>
          Rs.{item.price}
          </Badge>
        </ListGroup.Item>
        </ListGroup>
        ))}
        <div>
        <Button variant="secondary" size="sm" onClick={cartHideHandler}>Close</Button>
        <Button variant="secondary" size="sm">Purchase</Button>
        </div>
        </Modal>
    )
}

export default Cart;
import { Modal, Badge, Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import CartContext from "../../Store/CartContext";
import { useContext } from "react";
import TokenContext from "../../Store/TokenContext";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cart = useContext(CartContext);
  const tok = useContext(TokenContext);
  const email_id = tok.emailId.replace(/[^\w ]/g, "");

  let open = cart.carton;
  const cartHideHandler = () => {
    cart.hideCart();
  };
  
  const handlesub = async (id) => {
    
      await fetch(`https://crudcrud.com/api/f462e23384b74d89a06cf27a32e60caa/cart${email_id}/${id}`,{
      method: "DELETE"
    })
    
    cart.removeItem(id);
  };

  console.log(props);
  return (
    <Modal show={open} onHide={cartHideHandler}>
      <h2 className={classes.title}>Cart</h2>
      {props.cartItems.map((item) => (
        <ListGroup as="ol" numbered key={item.id}>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{item.title}</div>
            </div>
            <span>x{item.quantity}</span>
            <button onClick={handlesub.bind(null, item._id)}> Remove </button>
            <Badge bg="primary" pill>
              Rs.{item.price}
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      ))}
      <div>
        <Button variant="secondary" size="sm" onClick={cartHideHandler}>
          Close
        </Button>
        <Button variant="secondary" size="sm">
          Purchase
        </Button>
        <span>Total: {cart.totalAmount}</span>
      </div>
    </Modal>
  );
};

export default Cart;

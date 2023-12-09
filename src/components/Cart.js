import { Modal, Badge, Button} from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';


const Cart=(props)=>{
    console.log(props.product);
    const handleClose=()=>{
        props.off();
    }
    return(
        <Modal show={props.show} onHide={handleClose}>
        <h2>Cart</h2>
       {props.product.map((item) => (
        <ListGroup as="ol" numbered>
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            {item.title}
          </div>
          <button>+</button>
          <button>-</button>
          <Badge bg="primary" pill>
          Rs.{item.price}
          </Badge>
        </ListGroup.Item>
        </ListGroup>
        ))}
        <div>
        <Button variant="secondary" size="sm">Close</Button>
        <Button variant="secondary" size="sm">Purchase</Button>
        </div>
        </Modal>
    )
}

export default Cart;

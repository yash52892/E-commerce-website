import Display from "./display";

//import { Container, Image, Row, Col } from "react-bootstrap";
const Items = (props) => {
  return (
    <>
    <section className="container"style={{width:'25%'}}>
    {props.items.map((item)=>(
        <Display
        title={item.title}
        price={item.price}
        url={item.imageUrl}
        />
))}
    </section>
    </>
  );
};

export default Items;

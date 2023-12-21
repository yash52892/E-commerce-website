import Display from "./Display";
const Items = (props) => {
  
  const productlist=props.items.map((item)=>
  <Display key={item.price} title={item.title} price={item.price} url={item.imageUrl}/>)

  return (
    <ul>
      {productlist}
    </ul>
  );
};

export default Items;

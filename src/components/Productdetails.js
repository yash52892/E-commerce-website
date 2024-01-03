import { useParams } from "react-router-dom";
import {productsArr} from "./Product";

const Productdetails=(props)=>{
   const param=useParams();
   
   const item=productsArr.filter((product)=>{
      return product.price===parseInt(param.pId);
   })

     return(
      <>
      <img src={item[0].imageUrl} alt="text"></img>
     <p>{item[0].price}</p> 
     <p>{item[0].title}</p>
     </>
     )
}

export default Productdetails;
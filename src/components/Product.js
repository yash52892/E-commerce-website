import Items from './Items';
import { Button } from 'react-bootstrap';

const Product=()=>{
    const productsArr = [
        {    
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },   
        {
        title: 'Black and white Colors',    
        price: 50,    
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',    
        },    
        {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
        title: 'Blue Color',
        price: 150,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
        ]
    return  (<>
    <Items items={productsArr} />
    <Button variant="outline-secondary" style={{ marginLeft: "435px" }} onClick={()=>{props.onProShow()}}>See the Cart</Button>
    </>)
}
export default Product;

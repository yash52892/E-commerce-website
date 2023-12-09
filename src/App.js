import './App.css';
import React from 'react';
import Header from './components/Header';
import Sub from './components/Sub';
import Items from './components/Items';
import Footer from './components/Footer';
import { Button } from 'react-bootstrap';
import Cart from './components/Cart';
import { useState } from 'react';

const App=()=>{
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
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
    ]
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
    <Header on={handleShow}/>
    <Cart product={productsArr} show={show} off={handleClose}/>
    <Sub/>
    <Items items={productsArr}/>
    <Button variant="outline-secondary" style={{marginLeft:"725px"}} onClick={handleShow}>See the Cart</Button>
    <Footer/>
    </React.Fragment>
  );
  
}

export default App;

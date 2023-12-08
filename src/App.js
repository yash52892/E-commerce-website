import './App.css';
import React from 'react';
import Header from './components/Header';
import Sub from './components/Sub';
import Items from './components/Items';
import Footer from './components/Footer';
import { Button } from 'react-bootstrap';


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

  return (
    <React.Fragment>
    <Header/>
    <Sub/>
    <Items items={productsArr}/>
    <Button variant="outline-secondary" style={{ float: "centre", padding:"15px", backgroundcolor:"#777"}}>See the Cart</Button>
    <Footer/>
    </React.Fragment>
  );
  
}

export default App;

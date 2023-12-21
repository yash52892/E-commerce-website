import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import Product from './components/Product';
import Root from './Root';
import CartProvider from './Store/CartProvide';
import About from './components/About';

const App=()=>{
  
  const route=createBrowserRouter(
    [{path: '/', 
      element: <Root/>, 
      children:[
        {path: '/home', element: <Home/>},
        {path: '/product', element: <Product/>},
        {path: '/about', element: <About/>}
    ]}]
    );

  return (
    <CartProvider>
      <RouterProvider router={route}/>
      </CartProvider>
  );
  
}

export default App;

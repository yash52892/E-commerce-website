import "./App.css";
import React, { useContext } from "react";
import { BrowserRouter as Router, Route,Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Root from "./Root";
import CartProvider from "./Store/CartProvide";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Productdetails from "./components/Productdetails";
import Login from "./pages/Login";
import TokenContext from "./Store/TokenContext";

const App = (props) => {
  const tok=useContext(TokenContext);
  console.log(tok.isLoggedin);
  const handlerproShow = () => {
    props.onnavShow();
  };
  const handle = async (obj) => {
    try {
      const res = await fetch(
        "https://ecommerce-5629f-default-rtdb.firebaseio.com/feedback.json",
        {
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Root />}>
          <Route path="/home"  element={<Home/>}/>
          <Route path="/product" element={tok.isLoggedin ? (<Product onProShow={handlerproShow}/>) :
           (<Navigate replace to="/login" element={ <Login />}/>)}/>
           <Route path="/product/:pId" element={tok.isLoggedin ? (<Route path="/product/:pId" element={<Productdetails item={props}/>}/>) :
           (<Navigate replace to="/login" element={ <Login />}/>)}/>
          <Route path="/about" element={ <About />}/>
          {!tok.isLoggedin && (<Route path="/login" element={ <Login />}/>)}
          <Route path="/contact" element={<Contact handleContact={handle} />}/>
          <Route path="*" element={<Navigate replace to="/"/>}/>
          </Route>
        </Routes>
      </Router>
    </CartProvider>
   
  );
};

export default App;

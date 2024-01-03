import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import Root from "./Root";
import CartProvider from "./Store/CartProvide";
import About from "./components/About";
import Contact from "./components/Contact";
import Productdetails from "./components/Productdetails";

const App = (props) => {
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

  // const route=createBrowserRouter(
  //   [{path: '/',
  //     element: <Root/>,
  //     children:[
  //       {path: '/', element: <Home/>},
  //       {path: '/product', element: <Product onProShow={handlerproShow}/>,
  //       children:[
  //         {path:'/product/productdetails', element:<Productdetails/>}
  //       ]},
  //       {path: '/about', element: <About/>},
  //       {path: '/contact', element:<Contact handleContact={handle}/>}
  //   ]}]
  //   );

  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Root />}>
          <Route path="/home" element={<Home/>}/>
          <Route exact path="/product" element={<Product onProShow={handlerproShow} />}/>  
          <Route path="/product/:pId" element={<Productdetails item={props}/>}/>
          <Route path="/about" element={ <About />}/>
          <Route path="/contact" element={<Contact handleContact={handle} />}/>
          </Route>
        </Routes>
      </Router>

      {/* <RouterProvider router={route}/> */}
    </CartProvider>
  );
};

export default App;

import React from "react";

const CartContext = React.createContext({
    items: [],
    carton:false,
    cartShow:()=>{},
    hideCart:()=>{},
    addItem: (item, quantity) => {},
    removeItem: (id) => {}
  });

export default CartContext;

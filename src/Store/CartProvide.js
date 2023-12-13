import React from "react";
import CartContext from "./CartContext";
import { useState } from "react";

const CartProvider=(props)=>{

    const [list,setList]=useState([]);

    const addItemHandler=(obj)=>{
        setList([...list,obj])
    }
    const Final={
        items:([...list]),
        addItem:addItemHandler
    };
    
    return(
        <CartContext.Provider value={Final}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;
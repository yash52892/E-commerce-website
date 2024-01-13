import React, { useContext } from "react";
import CartContext from "./CartContext";
import { useState, useReducer, } from "react";
import TokenContext from "../Store/TokenContext";

const defaultCartState = {
    items: [],
    totalAmount: 0,
  };
  
  const cartReducer = (state, action) => {
    if (action.type === 'ADD') {

        const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;
    
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: parseInt(existingCartItem.quantity) + parseInt(action.item.quantity)
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }
      
      
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      };
    }
    if (action.type === 'REMOVE') {
      console.log(state.items, action)
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingItem = state.items[existingCartItemIndex];
       
      let updatedItems;
      // if (existingItem.quantity === 1) {
      //   updatedItems = state.items.filter(item => item.id !== action.id);
      // } else {
      //   const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1};
      //   updatedItems = [...state.items];
      //   updatedItems[existingCartItemIndex] = updatedItem;
      // }
  
      return {
        items: updatedItems,
        };
    }

    return defaultCartState;
  };
  

const CartProvider=(props)=>{

    const tok=useContext(TokenContext);
    // console.log(tok);

    const [show, setShow]=useState(false);

    const [list, dispatchAction]=useReducer(cartReducer, defaultCartState);

    const addItemHandler=(obj)=>{
        dispatchAction({ type: 'ADD', item: obj });
    }

    const removeItemFromCartHandler = (id) => {
        dispatchAction({ type: 'REMOVE', id: id });
      };

    const onCartShow=()=>{setShow(true);}
    const onCartHide=()=>{setShow(false);}

    const Final={
        items:list.items,
        totalAmount: list.totalAmount,
        carton:show,
        cartShow: onCartShow,
        hideCart: onCartHide,
        addItem:addItemHandler,
        removeItem:removeItemFromCartHandler
    };
    console.log(Final)
    return(
        <CartContext.Provider value={Final}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;

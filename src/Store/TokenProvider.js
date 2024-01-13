import React, { useState } from "react";
import TokenContext from "./TokenContext";

const TokenProvider=(props)=>{
    const initToken=localStorage.getItem("id");
    const initEmail=localStorage.getItem("email");

    const [token, setToken]=useState(initToken);
    const [emailId, setEmailid]=useState(initEmail);

    const isLogged=!!token;
  

    const login=(id, email)=>{
        setToken(id);
        localStorage.setItem("id",token);
        setEmailid(email);
        localStorage.setItem("email",emailId);
    }

    const logout=()=>{
        setToken(null);
        localStorage.removeItem("id");
    }


    const Final={
        token: token,
    loginHandler:login,
    logoutHandler:logout,
    isLoggedin: isLogged,
    emailId:emailId
    }

    return(
        <TokenContext.Provider value={Final}>
        {props.children}
    </TokenContext.Provider>
    ) 
}

export default TokenProvider;

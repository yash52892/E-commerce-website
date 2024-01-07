import React, { useState } from "react";
import TokenContext from "./TokenContext";

const TokenProvider=(props)=>{
    const initToken=localStorage.getItem("id");
    const [token, setToken]=useState(initToken);

    const isLogged=!!token;
    console.log(isLogged)

    const login=(id)=>{
        setToken(id);
        localStorage.setItem("id",token);
    }

    const logout=()=>{
        setToken(null);
        localStorage.removeItem("id");
    }


    const Final={
        token: token,
    loginHandler:login,
    logoutHandler:logout,
    isLoggedin: isLogged
    }

    return(
        <TokenContext.Provider value={Final}>
        {props.children}
    </TokenContext.Provider>
    ) 
}

export default TokenProvider;
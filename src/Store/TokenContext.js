import React from "react";

const TokenContext = React.createContext({
    token: null,
    loginHandler:(id)=>{},
    logoutHandler:()=>{},
    isLoggedin: null
});
export default TokenContext;
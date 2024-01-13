import React from "react";

const TokenContext = React.createContext({
    token: null,
    emailId:null,
    loginHandler:(id)=>{},
    logoutHandler:()=>{},
    isLoggedin: null
});
export default TokenContext;

import { useContext, useRef, useState } from "react"; 
import classes from "./Login.module.css";
import {useNavigate} from 'react-router-dom';
import TokenContext from "../Store/TokenContext";

const Login=()=>{
    const [Loading, setLoading]=useState(false);

    const history=useNavigate();
    const tok=useContext(TokenContext);
    console.log(tok.isLoggedin);
    const email=useRef(null);
    const pass=useRef(null);

    const handleSubmit=async (event)=>{
        event.preventDefault();
        setLoading(true);
       const enteredEmail=email.current.value;
        const enteredPass=pass.current.value;
        const res=await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBLAYe2M0Gf_twVPGDmlWvNQpbMyvtkLYs",{
            method: "POST",
            body: JSON.stringify({
                email:enteredEmail,
                password: enteredPass,
                returnSecureToken: true
            }),
            headers: {
                "Content-Type": "application/json",
              }
        });
        if(res.ok){
            const data=await res.json();
            tok.loginHandler(data.idToken);
            history("/product");
        }else{
            const error = await res.json();
        alert(error.error.errors[0].message);
        }
        setLoading(false); 
    }
    

    return(
        <section className={classes.auth}>
            <h1>Login</h1>
        <form onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" ref={email} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" ref={pass} required />
        </div>
        <div className={classes.actions}>
          {Loading ? (
            <span>Sending request....</span>
          ) : (
            <button type="submit">
              Login
            </button>
          )}
        </div>
        </form>
        </section>
    )
}

export default Login;
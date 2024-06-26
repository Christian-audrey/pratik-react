import React, { useState } from 'react';
import './LoginRegister.css';
import { FaUser, FaLock, FaEnvelope} from "react-icons/fa6";
import Register from './Register';


const LoginRegister=() =>{

    const [action, setAction]= useState ('');

    const registerLink = ()=>{
        setAction('active');
    };

   const loginLink = ()=>{
        setAction('');
    };


  return (
    <div className={`wrapper${action}`}>
        <Register registerLink={registerLink}/>
      <div className="form-box login">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text"
                    placeholder='Username'required/>
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" 
                    placeholder="password" required/>
                    <FaLock className="icon"/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"/>
                    Remember me </label>
                    <a href="#">Forgot password?</a> 
                </div>
                <button type='submit'>Login</button>
                <div className="register-link">
                    <p>Don't have an account? <a href="#"
                    onClick={loginLink}>Register</a>
                    </p>
                </div>
          
            </form>
      </div> 

    </div>
  )
}

export default LoginRegister
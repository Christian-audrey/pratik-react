import React from 'react';
import { FaUser, FaLock, FaEnvelope} from "react-icons/fa6";

function Register({registerLink}) {
  return (
    <div> 
        <div className="form-box register">
            <form action="">
                <h1>Registration</h1>
                <div className="input-box">
                    <input type="text"
                    placeholder='Username'required/>
                    <FaUser className="icon" />
                </div>

                <div className="input-box">
                    <input type="email"
                    placeholder='Email'required/>
                    < FaEnvelope className="icon" />
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
                <button type='submit'>Register</button>
                <div className="register-link">
                    <p>Don't have an account? <a href="#"
                   onClick={registerLink} >Login</a>
                    </p>
                </div>
          
            </form>
      </div> 


    </div>
  )
}

export default Register
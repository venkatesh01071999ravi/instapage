import React from "react"
import {Link} from "react-router-dom"
import "./loginmain.css"

function LogInMain(){

        return(
                    
            <div>    
                
                <div className="logo-font">Instagram</div>
                        
                <form className="form-login">

                    <input type="email" placeholder="Your email id" name="email"></input> 
                    <input type="password" placeholder="Password" name="email"></input>
                    <button type="submit">Log In</button>

                </form>
                <div className="or">
                    <hr className="login-hr"></hr>
                    <span className="text-or">OR</span>
                    <hr className="login-hr-right"></hr>
                </div>
                <div className="signup-column">
                    
                    <Link to="/ForgotPassword" className="forgot">
                        Forgot Password?
                    </Link>
                    <br></br>
                    <br></br>
                    Don't Have an Account?
                    <Link to="/SignUp" className="SignUp">
                        Signup
                    </Link>  
                </div>
            </div>
                    
    ) 
}

export default LogInMain
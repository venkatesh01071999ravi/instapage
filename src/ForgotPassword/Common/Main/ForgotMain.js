import React from "react"
import {Link} from "react-router-dom"
import "./forgotmain.css"


function ForgotMain(){

        return(
                    
            <div className="main-page-forgot">

                <div className="main-page-double-wrap">      

                    <div className="main-page-wrap">

                                            

                        <div className="forgot-login">
                                            
                                <div className="form">
                                    <br></br>
                                    <h2>Trouble Logging in?</h2>
                                    <span className="text">Enter your username or email</span>
                                    <form className="forgot-form">
                                        <input type="email" placeholder="Please enter your email"></input>
                                        <br></br>
                                        <br></br>
                                        <button type="submit">Change</button>
                                    </form>
                                    <div className="forgot-or">
                                            <hr className="forgot-hr"></hr>
                                            <span className="forgot-text-or">OR</span>
                                            <hr className="forgot-hr-right"></hr>
                                    </div>
                                    <Link to="/SignUp" className="create-account">
                                        
                                        Create a new account
                                    
                                    </Link>
                                    
                                    <Link to="/" className="back-login">
                                            <div className="bottom">

                                                <span className="text-back">Back to Login</span>
                                            
                                            </div>
                                    </Link>

                                </div>
                                

                        </div>
                    </div> 
                </div>

            </div>
        )
     
    }
    
export default ForgotMain    

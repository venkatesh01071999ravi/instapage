import React from "react"
import {Link} from "react-router-dom"
import "./mainlogin.css"

function MainLogIn(){

       return(

        <div className="main-page-forgot">

            <div className="main-page-double-wrap-signup">      

                <div className="main-page-wrap">

                

                    <div className="forgot-login">
                        
                            <div className="form">
                                <br></br>
                                <h1>Instagram</h1>
                                <form className="forgot-form">
                                    <input type="email" placeholder="Please enter your email"></input>
                                    <br></br>
                                    <br></br>
                                    <input type="text" placeholder="Username"></input>
                                    <br></br>
                                    <br></br>
                                    <input type="password" placeholder="Password"></input>
                                    <br></br>
                                    <br></br>
                                    <button type="submit">SignUp</button>
                                </form>
                                <Link to="/" className="back-login-signup">
                                            <div className="bottom-signup">

                                                  <span className="text-back">Have an account?Log In</span>
                                            
                                            </div>
                                </Link>

        
                            </div>
                          
                    </div>
                      
                </div> 
            </div>

        </div>



       )
  

}

export default MainLogIn
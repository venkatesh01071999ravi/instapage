import React from "react"
import {useState} from "react"
import {Link,withRouter} from "react-router-dom"
import axios from "axios"
import "./loginmain.css"

function LogInMain(props){

        
        const[email,changeEmail] = useState("")
        const[password,changePassword] = useState("")
        const[error,changeError] = useState(false)
        const[server,changeServer] = useState(false)

        const change = (e) =>{

            if(e.target.name === "email"){

                changeEmail(e.target.value)

            }else if(e.target.name === "password"){

                changePassword(e.target.value)

            }


        }

        const submit = (f)=>{

            
            f.preventDefault()
            axios.post("http://localhost:5000/logIn",{

                email:email,
                password:password

            })
            .then(res => {
                console.log(res)
                localStorage.setItem("userToken",res.data)
                props.history.push('/user')

            })
            .catch(err =>{

                if(err.response.status === 400){

                    changeError(true)

                }else if(err.response.status === 500){

                    changeServer(true)

                }else if(err){

                    changeServer(true)

                }

            })

        }

        return(
                    
            <div>    
                
                <div className="logo-font">Instagram</div>
                 {error?<div className="error-1">Wrong credentials</div>
                  :server?<div className="error-1">Server error Please Try again</div>
                  :<></>
                 }       
                <form className="form-login" onSubmit={submit} >

                    <input type="email" name="email" required  placeholder="Your email id" onChange={change}></input> 
                    <input type="password" name="password" required placeholder="Password" onChange={change}></input>
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

export default withRouter(LogInMain)
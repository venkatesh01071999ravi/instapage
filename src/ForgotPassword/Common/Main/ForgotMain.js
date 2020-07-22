import React from "react"
import {useState} from "react"
import {Link,withRouter} from "react-router-dom"
import axios from "axios"
import "./forgotmain.css"


function ForgotMain(props){

        
        const[email,changeEmail] = useState("")
        const [server,changeServer] = useState(false)
        const [invalid,changeInvalid] = useState(false)
        const [success,changeSuccess] = useState(false)

        const change = (f)=>{

            changeEmail(f.target.value)
            
        }

        const submit = (e)=>{

            changeSuccess(false)
            changeServer(false)
            changeInvalid(false)
            e.preventDefault()
            axios.post("http://localhost:5000/forgotPassword",{

                email:email

            })
            .then(res =>{

                if(res){

                    changeSuccess(true)
                    setTimeout(()=>{

                        props.prop(true)
                        props.history.push(`/PasswordChange/${email}`)

                    },3000)
                }

            })
            .catch(err =>{

                
                if(err.response.status === 400){

                    changeInvalid(true)
                    setTimeout(()=>{

                        props.prop(true)

                    },3000)


                }
                else if(err.response.status === 500){

                    changeServer(true)

                }


            })

        }

        return(
                    
            <div className="main-page-forgot">

                <div className="main-page-double-wrap">      

                    <div className="main-page-wrap">

                                            

                        <div className="forgot-login">
                                            
                                <div className="form">
                                    <br></br>
                                    <h2>Trouble Logging in?</h2>
                                    <span className="text">Enter your email</span>
                                    {server?<div className="error">There was an server Error!please try again</div>
                                     :invalid?<div className="error">That email id was not found!Please Try again</div>
                                     :success?<div className="success">Redirecting to password change</div>
                                     :<></>
                                    }
                    
                                    <form className="forgot-form" onSubmit={submit}>
                                        <input type="email" required placeholder="Please enter your email" onChange={change}></input>
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
    
export default withRouter(ForgotMain)    

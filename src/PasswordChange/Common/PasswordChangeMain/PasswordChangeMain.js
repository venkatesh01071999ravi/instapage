import React from "react"
import {useState} from "react"
import {Link,withRouter} from "react-router-dom"
import "./passwordchangemain.css"
import axios from "axios"

function PasswordChangeMain(props){

       const[password,changePassword] = useState("")
       const[confirm,changeConfirm] = useState("")
       const[error,changeError] = useState(false)
       const[success,changeSuccess] = useState(false)
       const[server,changeServer] = useState(false)

       const change= (e)=>{

            if(e.target.name === "password"){

                changePassword(e.target.value)

            }else{

                changeConfirm(e.target.value)

            }
       }    

       const submit = (f)=>{

            f.preventDefault()
            if(password != confirm){

                changeError(true)

            }else{

                axios.post('http://localhost:5000/passwordChange',{

                    email:props.email,
                    password:password,

                })
                .then(res => {

                    if(res.request.status === 200){

                            changeSuccess(true)
                            setTimeout(()=>{

                                props.history.push('/')

                            },4000)

                    }


                })
                .catch( err =>{

                    if(err.response.status === 500){

                        changeServer(true)
                        setTimeout(()=>{

                            props.history.push('/')

                        },4000)

                    }

                })

            }

       }


       
       
       return(

        <div className="main-page-forgot">

            <div className="main-page-double-wrap-signup">      

                <div className="main-page-wrap">

                

                    <div className="change-login">
                        
                            <div className="form">
                                <br></br>
                                <h1>Instagram</h1>
                                {error?<div className="error">Passwords doesn't match</div>
                                 :success?<div className="success">Password updated successfully</div>
                                 :server?<div className="error">Server error please try again</div>
                                 :<></>  
                                
                                }
                                <form className="change-form" onSubmit={submit}>
                                    <input type="password" name="password" required placeholder="Password" onChange={change}></input>
                                    <br></br>
                                    <br></br>
                                    <input type="password" name="confirm" required placeholder="Confirm Password" onChange={change}></input>
                                    <br></br>
                                    <br></br>
                                    <button type="submit">Reset</button>
                                </form>
                                <Link to="/" className="back-login-change">
                                            <div className="bottom-login">

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

export default withRouter(PasswordChangeMain)
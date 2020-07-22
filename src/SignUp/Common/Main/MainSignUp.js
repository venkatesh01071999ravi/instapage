import React from "react"
import {Link,withRouter} from "react-router-dom"
import {useState} from "react"
import "./mainsignup.css"
import axios from "axios"

function MainSignUp(props){ 
       const[email,changeEmail] = useState("")
       const[user,changeUser] = useState("")
       const[password,changePasssword] = useState("")
       const[randomuser,changeRandomUser] = useState(false)
       const[server,changeServer] = useState(false)
       const[taken,changeTaken] = useState(false) 
       const[success,changeSuccess] = useState(false)
       const change = (e) =>{
        
         const{name,value} = e.target
         if(name == 'email'){

            changeEmail(value)

         }
         else if(name == 'password'){

            changePasssword(value)

         }
         else if(name == 'user'){

            changeUser(value)

         }


       }

       const userAdd = (e)=>{

            changeRandomUser(false)
            document.getElementById('user-name').value = e.target.innerHTML
            changeUser(e.target.innerHTML)
            


    }

       const submit = (f) => {
        changeServer(false)
        changeTaken(false)
        changeSuccess(false)
        changeRandomUser(false)
        f.preventDefault()
        axios.post('http://localhost:5000/signUp',{

            email:email,
            user:user,
            password:password
        })
        .then(res => {

            if(res.data.error === 1){

                changeTaken(true)

            }

            else if(res.data.error === 2){

                changeRandomUser(true)

            }

            else{

                changeSuccess(true)
                setTimeout(()=>{

                    props.history.push('/')

                },2000)

            }


        })
        .catch(err =>{

            if(err.response.status === '500'){

                changeServer(true)

            }


        })
        
        
       }

       return(

        <div className="main-page-forgot">

            <div className="main-page-double-wrap-signup">      

                <div className="main-page-wrap">

                

                    <div className="signup">
                        
                            <div className="form">
                                <br></br>
                                <h1>Instagram</h1>
                                {server?<div className="error" variant="danger">Server error! Please try again</div>
                                :taken?<div className="error" variant="danger">That email is already taken!!</div>
                                :randomuser?<div><div className="error">That username is already taken</div>
                                <br></br>
                                Suggested username:
                                <br></br>
                                <div className="user" onClick={userAdd}>
                                {user+Math.floor(Math.random(5)*100)}
                                </div>
                                </div>
                                :success?<div className="success" >Sucessfully registered!!</div>
                                :<></>}
                                
                                
                                <form className="signup-form" onSubmit={submit}>
                                    <input type="email" name="email" placeholder="Please enter your email" required onChange={change}></input>
                                    <br></br>
                                    <br></br>
                                    <input type="text" name="user" placeholder="Username" required  onChange={change} id="user-name" ></input>
                                    <br></br>
                                    <br></br>
                                    <input type="password" name="password" placeholder="Password" required  onChange={change}></input>
                                    <br></br>
                                    <br></br>
                                    <button type="submit">SignUp</button>
                                </form>
                                
        
                            </div>
                          
                    </div>
                      
                </div> 
            </div>

        </div>



       )
  

}

export default withRouter(MainSignUp)
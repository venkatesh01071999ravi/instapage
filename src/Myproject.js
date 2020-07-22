import React from "react"
import {useState} from "react"
import MainPage from "./UserPage/MainPage"
import {BrowserRouter as Router,Switch,Route, BrowserRouter} from "react-router-dom"
import LogIn from "./LogInPage/LogIn"
import ForgotPassword from "./ForgotPassword/ForgotPassword"
import SignUp from "./SignUp/SignUp"
import PasswordChange from "./PasswordChange/PasswordChange"

const MyProject = () => {

      const [auth,changeAuth] = useState(false)
    
     
      console.log(auth)
      return(

            <div>
                <BrowserRouter>
                <Switch>
                    <Route exact path = "/" component={LogIn} />
                    <Route path = "/user" component={MainPage} />
                    <Route path = "/ForgotPassword" component={()=>(<ForgotPassword prop={changeAuth} />)} />
                    <Route path = "/SignUp" component={SignUp} />
                    <Route path = "/PasswordChange/:email" component={()=>(<PasswordChange prop={auth} />)} />
                </Switch>
                </BrowserRouter>    
            </div>




      )



}



export default MyProject
import React from "react"
import MainPage from "./UserPage/MainPage"
import {BrowserRouter as Router,Switch,Route, BrowserRouter} from "react-router-dom"
import LogIn from "./LogInPage/LogIn"
import ForgotPassword from "./ForgotPassword/ForgotPassword"
import SignUp from "./SignUp/SignUp"

const MyProject = () => {

      return(

            <div>
                <BrowserRouter>
                <Switch>
                    <Route exact path = "/" component={LogIn} />
                    <Route path = "/user" component={MainPage} />
                    <Route path = "/ForgotPassword" component={ForgotPassword} />
                    <Route path = "/SignUp" component={SignUp} />
                </Switch>
                </BrowserRouter>    
            </div>




      )



}



export default MyProject
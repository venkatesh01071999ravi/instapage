import React from "react"
import {Link} from "react-router-dom"
import "./forgotheader.css"

function ForgotHeader(){

      return(
        
        <div className="forgot-header">
            <Link to="/" className="forgot-wrap" >
                <div className="forgot-logo">Instagram</div>
            </Link>       
        </div>



      )


}

export default ForgotHeader
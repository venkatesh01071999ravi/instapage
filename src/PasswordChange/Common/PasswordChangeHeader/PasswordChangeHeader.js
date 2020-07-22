import React from "react"
import {Link} from "react-router-dom"
import "./passwordchangeheader.css"

function PasswordChangeHeader(){

                return(
                    
                                
                    <div className="change-header">
                        <Link to="/" className="change-wrap" >
                                <div className="change-logo">Instagram</div>
                        </Link>       
                    </div>

            ) 
}

export default PasswordChangeHeader
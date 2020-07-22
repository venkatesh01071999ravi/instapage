import React from "react"
import LogInMain from "./Common/LogInMain/LogInMain"
import axios from "axios"
function LogIn(props){

      if(localStorage.getItem('userToken')!=null){

            props.history.push('/user')           


      }
      return(
         
            
            <div className="flex-container">
                   
                   <LogInMain />
                    
            </div>
            
      )


}




export default LogIn
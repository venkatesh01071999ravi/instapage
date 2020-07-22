import React from "react"
import {withRouter} from "react-router-dom"
import PasswordChangeHeader from "./Common/PasswordChangeHeader/PasswordChangeHeader"
import  PasswordChangeMain from "./Common/PasswordChangeMain/PasswordChangeMain"
function PasswordChange(props){

      
      if(!props.prop){

         props.history.push('/')

      }
      return(
      
       
       <div>

          <PasswordChangeHeader />
          <PasswordChangeMain email={props.match.params.email} />  
                                     
       </div>

    )


}




export default withRouter(PasswordChange)
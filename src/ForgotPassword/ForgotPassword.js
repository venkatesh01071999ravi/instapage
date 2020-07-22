import React from "react"
import ForgotHeader from "./Common/Header/ForgotHeader"
import ForgotMain from "./Common/Main/ForgotMain"
function ForgotPassword(props){

      console.log(props)
      return(

         <div>
              

            <ForgotHeader />
            <ForgotMain prop = {props.prop} />   
               
         </div>

      )



}



export default ForgotPassword
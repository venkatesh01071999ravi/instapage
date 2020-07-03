import React from "react"
import "./profile.css"
import image from "../../../Main/Common/img1.JPG"

function Profile(){

          return(

            <div className="profile">

                <a href="#">

                    <img src={image} className="profile-image"></img>
                    
                </a>
                <a href="#" className="profile-name"><span>ven_kat_esh</span></a>
                <br></br>
                <span className="profile-username">venkatesh ravi</span>
                                
            </div>


          )





}


export default Profile
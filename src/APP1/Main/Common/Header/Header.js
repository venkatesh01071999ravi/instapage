import React from "react"
import "./header.css"
import image from "../img1.JPG"


function Header(){

      return(
         
         <div className="header">
  
            <div className="outer1">
               <a href="#" className="ref"><div className="inner1">

                    <img src={image} className="post-header-image"></img>
                    
                </div></a>
            </div>    
            <span className="name1">Troll English Series</span>
            <span className="tripledot">...</span>



           



         </div>





      )






}


export default Header
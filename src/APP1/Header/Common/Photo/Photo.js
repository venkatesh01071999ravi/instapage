import React from 'react'
import img from  "./img.jpg"
import "./photo.css"


function Photo(){

      return(
        
        <div className="image">

            <a href="#"><img  src={img}  className="main-image-header" /></a>

        </div>
      
      )

}

export default Photo
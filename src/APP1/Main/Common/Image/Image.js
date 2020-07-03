import React from "react"
import "./image.css"

function Image(props){
       return(
            <div className="outer">
               <a href="#" className="ref"><div className="inner">

                    <img src={props.img} className="story-image"></img>
                    <div className="name"> 
                      <span className="story-name">{props.name}</span>
                    </div>

                </div></a>
                
          



            </div>



       )



}

export default Image
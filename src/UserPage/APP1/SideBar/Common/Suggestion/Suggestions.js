import React from "react"
import "./Suggestion.css"
import image from "../../../Main/Common/img1.JPG"

function Suggestions(){

      return(

        <div className="Suggest">

                      
               <span className="suggest_name">Suggestions For You</span>
               <a href="" className="see-all"><span>See All</span></a> 
               <br></br>
               <br></br>
               <div className="first-suggestion">
                    <a href="#" className="names">

                            <img src={image} className="suggestion-image"></img>
                            <span className="suggestion-user">venky01</span>
                     </a>
                    <br></br>
                    <span className="suggestion-followed-by">Followed by ashwin_.vengateshan+</span>
                    <br></br>
                    <span className="suggestion-followed-by">56more </span>
                </div>
                <a href="#" className="suggestion-follow"><span>Follow</span>
                </a>
                <br />
                <div className="following-suggestion">
                    <a href="#" className="names">

                            <img src={image} className="suggestion-image"></img>
                            <span className="suggestion-user">Roshan12345</span>
                     </a>
                    <br></br>
                    <span className="suggestion-followed-by">Followed by ashwin_.vengateshan+</span>
                    <br></br>
                    <span className="suggestion-followed-by">56more </span>
                </div>
                <a href="#" className="suggestion-follow"><span>Follow</span>
                </a>
                <br />
                <div className="following-suggestion">
                    <a href="#" className="names">

                            <img src={image} className="suggestion-image"></img>
                            <span className="suggestion-user">user123445</span>
                     </a>
                    <br></br>
                    <span className="suggestion-followed-by">Followed by ashwin_.vengateshan+</span>
                    <br></br>
                    <span className="suggestion-followed-by">56more </span>
                </div>
                <a href="#" className="suggestion-follow"><span>Follow</span>
                </a>
                <br />
                <div className="following-suggestion">
                    <a href="#" className="names">

                            <img src={image} className="suggestion-image" ></img>
                            <span className="suggestion-user">venkatesh12345</span>
                     </a>
                    <br></br>
                    <span className="suggestion-followed-by">Followed by ashwin_.vengateshan+</span>
                    <br></br>
                    <span className="suggestion-followed-by">56more </span>
                </div>
                <a href="#" className="suggestion-follow"><span>Follow</span>
                </a>
                <br />

              
        </div>
  
    )


}



export default Suggestions
import React from "react"
import "./Story.css"
import Image from "../Image/Image"
import image from "../img1.JPG"
import image1 from "../img2.JPG"


function Top(){

     return(
    
          <div className="Story">
             
            
            <Image name="Venkatesh" img={image} />
            <Image name="Ravi" img={image1} />
            <Image name="Roshan" img={image} />
            <Image name="Rithish" img={image1} />
            <Image name="Gokul" img={image} />
            <Image name="Jeevan" img={image1} />
            <Image name="Suman" img={image} />
            <Image name="Manoj" img={image} />

            <button className="button"><span className="button-inner" >{">"}</span></button>
            
         </div>


     )
     





}



export default Top
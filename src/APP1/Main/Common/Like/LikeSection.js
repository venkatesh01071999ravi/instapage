import React from "react"
import "./like.css"
import share from "../share.ico"
import save from "../save.ico"



function LikeSection(){

       return(

             <div className="like">
 
                   <button type="button" className="button2"><i className="far fa-heart"></i></button>
                   <button type="button" className="button2"><i className="far fa-comment"></i></button>
                   
                   <button type="button" className="button2" ><img className="share" src={share}></img></button>
                   <button type="button" className="button3"><img src={save} className="save"></img></button>
             </div>


       )





}


export default LikeSection
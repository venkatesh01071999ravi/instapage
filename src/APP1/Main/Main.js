import React from "react"
import "./Mainpage.css"
import Top from "./Common/Story/Top"
import Posts from "./Common/Post/Posts"


function Main(){

       return(

            <div className="Mainpage">

                    <Top />
                    <Posts />
                    <Posts />
                    <Posts />
                    <Posts />
            
            </div>

        )


}

export default Main
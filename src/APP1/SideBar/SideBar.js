import React from "react"
import "./Sidebar.css"
import Profile from "./Common/Profile/Profile"
import Footer from "./Common/Footer/Footer"
import Suggestions from "./Common/Suggestion/Suggestions"



function SideBar(){
     
    return(
       
            <div className="side">
                 <Profile />
                 <Suggestions />
                 <Footer />
               
            </div>

        )

    }

export default SideBar
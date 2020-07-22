import React from 'react'
import Header from "./APP1/Header/Header"
import Main from "./APP1/Main/Main"
import SideBar from "./APP1/SideBar/SideBar"
import {useEffect} from "react"
import axios from "axios"

function MainPage(props){

      useEffect(()=>{

        if(localStorage.getItem("userToken")!=null){

                
            
           let mytimer=setInterval(()=>{
                axios.post("http://localhost:5000/profile",{

                    token:localStorage.getItem("userToken")

                })
                .then(res => {
                    if(res.data.error){

                        clearInterval(mytimer)
                        alert("Session Expired")
                        props.history.push('/')
                        localStorage.removeItem("userToken")

                    }

                })

                .catch(err => {

                    if(err){

                        props.history.push("/")

                    }

                })
            
            },2000)
        }else{

                props.history.push('/')

            }

        },[]) 
            
    
  
      return(
     
        <div>

            <Header />
            <SideBar />
            <Main />
           
        </div>

    )

}

export default MainPage
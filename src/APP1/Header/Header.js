import React from 'react'
import "./Header.css"
import Logo from "./Common/Logo/Logo"
import Input from "./Common/Input/Input"
import Home from "./Common/Home/Home"
import Message from "./Common/Message/Message"
import Nav from "./Common/Nav/Nav"
import Photo from "./Common/Photo/Photo"
function Header(){

      return(

        <div className = "Header">

            <Logo />
            <Input />
            <Home />
            <Message />
            <Nav />
            <Photo />
        </div>




      )

}

export default Header
import React from "react"
import "./post.css"
import Header from "../Header/Header"
import PostImage from "../PostImage/PostImage"
import LikeSection from "../Like/LikeSection"
import CommentSection from "../CommentSection/CommentSection"

function Posts(){

      
          return(

              <div className="posts">

                     <Header />
                     <PostImage />
                     <LikeSection />
                     <CommentSection />
              
              </div>
       
       )

}

export default Posts
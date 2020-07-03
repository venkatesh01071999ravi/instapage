import React from "react"
import "./comment.css"
import image from "../img1.JPG"


function CommentSection(){


     return(

            <div className="comment">

                
                <a href="#"><div className="inner2">

                        <img src={image} className="comment-section-image"></img>
                            
                </div></a>
                <div className="liked">

                   <span>Liked by</span><a href="#" className="liked-name">Roshan</a><span>and</span><a href="#" className="liked-name">48,200 others</a>


                </div>

                <div className="commentsec">

                      <a href="#" className="comment-sec-name">
                        
                          Troll English Series
                          
                     </a>
                     <span className="caption">Let this july be awesome....</span>



                </div>

                <div className="commentbox">
                   
                    <a href="#" className="view">View all 378 comments</a>
                    <div className="actualcomments">

                         <a href="#" className="float">aravinthan.gm</a><span className="my-comm">Everytime</span><button type="button" className="heart"><i className="far fa-heart"></i></button>
                         
                    </div>
                    <div className="actualcomments">

                         <a href="#" className="float">aravinthan.gm</a><span className="my-comm">Everytime</span><button type="button" className="heart"><i className="far fa-heart"></i></button>
                         
                    </div>
                    <div className="actualcomments">

                         <a href="#" className="float1">17 hours ago</a>
               
                        <div className="down">
                            <form> 
                               <textarea placeholder="Add a comment..." />
                               <button type="submit" className="post">Post</button>
                            </form>   
                        </div>

                </div>
            
                

      

            </div>

          </div>


     )




}

export default CommentSection
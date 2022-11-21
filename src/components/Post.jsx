import React, { useState } from "react"


import bookmarkOutline from "../images/bookmark-outline.svg"
import bookmarked from "../images/bookmark.svg"

import heartOutline from "../images/heart_outline.png"
import heartMarked from "../images/heart_active.png"

export default function Post(props) {
    const [bookmark, setBookmark] = useState(bookmarkOutline) 
    const [heart, setHeart] = useState(heartOutline)
    const [likeNumber, setLikeNumber] = useState (parseFloat(props.postLikesNumber))

    function savePost(){
      if(bookmark === bookmarkOutline){
        setBookmark(bookmarked)
        
      } else {
        setBookmark(bookmarkOutline)
        
      }  
    }

    function likePost(){
      if(heart === heartOutline){
        setHeart(heartMarked)
        setLikeNumber(likeNumber + 1)
      } else {
        setHeart(heartOutline)
        setLikeNumber(likeNumber - 1)
      }  
    }

    function likePostImagem(){
      if(heart === heartOutline){
        setHeart(heartMarked)
        setLikeNumber(likeNumber + 1)
    }
  }

    return (
        <div className="post">

        <div className="post_header">
          <div className="post_header_content">
            <div className="post-photo-title">
              <img src={props.postLogo} alt="" />
              <p className="post-title">{props.postTitle}</p>
            </div>
            <div className="post-dots">
              <img src={props.dots} alt="" />
            </div>
          </div>
        </div>
        <div className="image-post">
          <img src={props.postImage} alt="" className="post-photo" onClick={likePostImagem}/>
        </div>
        <div className="post-bottom">
          <div className="post-iteraction-icons">
            <div className="post_icons-left">
              <img src={heart} alt="" className="icons" onClick={likePost}/>
              <img src={props.postChat} alt="" className="icons" />
              <img src={props.postDirectPlane} alt="" className="icons" />
            </div>
            <div className="post_icons-right">
            <img src={bookmark} alt="" className="save-icon" onClick={savePost}/>
            </div>
          </div>
          
          <div className="post_info">
            <img src={props.postUserLogo} alt="" className="logos-bottom" />
            <p>Curtido por <span>{props.postUsername}</span> e <span>outras {likeNumber} pessoas</span></p>
          </div>
        </div>           
      </div>
    )
}

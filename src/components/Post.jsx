import React from "react"




export default function Post(props) {
    console.log(props)
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
          <img src={props.postImage} alt="" className="post-photo" />
        </div>
        <div className="post-bottom">
          <div className="post-iteraction-icons">
            <div className="post_icons-left">
              <img src={props.postHeart} alt="" className="icons" />
              <img src={props.postChat} alt="" className="icons" />
              <img src={props.postDirectPlane} alt="" className="icons" />
            </div>
            <div className="post_icons-right">
            <img src={props.postBookMark} alt="" className="icons" />
            </div>
          </div>
          
          <div className="post_info">
            <img src={props.postUserLogo} alt="" className="logos-bottom" />
            <p>Curtido por <span>{props.postUsername}</span> e <span>outras {props.postLikesNumber} pessoas</span></p>
          </div>
        </div>           
      </div>
    )
}

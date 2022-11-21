import React from "react";
import Post from "./Post";

import Dots from "../images/tres-pontos.svg";

import pLogo0 from "../images/post-logo-01.svg";
import pLogo1 from "../images/post-logo-02.svg";

import pImage0 from "../images/imagem-post-01.png";
import pImage1 from "../images/imagem-post-02.png";
import pImage2 from "../images/imagem-post-03.png";

import UserLikeLogo0 from "../images/respondeai 2.svg";
import UserLikeLogo1 from "../images/adorableanimals 2.svg";

import Heart from "../images/heart.svg"
import Chat from "../images/chat.svg"
import Direct from "../images/direct.svg"
import Bookmark from "../images/bookmark.svg"



export default function Posts() {
  const posts = [
    {
      pLogo: pLogo0,
      pTitle: "meowed",
      pDots: Dots,
      pImage: pImage0,
      pHeartOutLine: Heart,
      pChatBubble: Chat,
      pPaperPlane: Direct,
      pBookMarkOutLine: Bookmark,
      pUserLikeLogo: UserLikeLogo0,
      pUserLikeName: "respondeai",
      pLikesNumber: 101,
    },
    {
      pLogo: pLogo1,
      pTitle: "barked",
      pDots: Dots,
      pImage: pImage1,
      pHeartOutLine: Heart,
      pChatBubble: Chat,
      pPaperPlane: Direct,
      pBookMarkOutLine: Bookmark,
      pUserLikeLogo: UserLikeLogo1,
      pUserLikeName: "adorableanimals",
      pLikesNumber: 991,
    },
  ];
  return (
    <div className="container_posts">
    {posts.map((post)=>(
        <Post
        postLogo={post.pLogo}
        postTitle={post.pTitle}
        dots={post.pDots}
        postImage={post.pImage}
        postHeart={post.pHeartOutLine}
        postChat={post.pChatBubble}
        postDirectPlane={post.pPaperPlane}
        postBookMark={post.pBookMarkOutLine}
        postUserLogo={post.pUserLikeLogo}
        postUserName={post.pUserLikeName}
        postLikesNumber={post.pLikesNumber}
      />
    ))}
      
    </div>
  );
}

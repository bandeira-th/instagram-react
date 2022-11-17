import React from "react";
import Ring from "../images/stories_background 1.png"


export default function Story({image, title}) {
  return (
    <div class="stories_item">
      <div class="stories_ring">
        <img src={Ring} alt="" />
        <img
          src={image}
          alt=""
          class="stories_icon"
        />
      </div>
      <p>{title}</p>
    </div>
  );
}

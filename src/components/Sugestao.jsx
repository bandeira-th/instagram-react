import React from "react";
export default function Sugestao({image, title}) {
  return (
    <div class="sugestions_item">
      <div class="sugestions_item-content">
        <div class="sugestions_item-img">
          <img src={image} alt="" />
        </div>
        <div class="sugestions_item-info">
          <h3>{title}</h3>
          <p>Segue você</p>
        </div>
      </div>
      <div class="sugestions_link">
        <a href="#">Seguir</a>
      </div>
    </div>
  );
}

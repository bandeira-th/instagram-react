import React from "react";
import { useState } from "react";

import { IoPencilOutline } from "react-icons/io5";

export default function Usuario(props) {
  const [username, setUsername] = useState(props.userTitle);
  const [userImage, setUserImage] = useState(props.userImage);

  const isImage = (url) => {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg|bmp|tiff)$/.test(url);
  };

  function changeUserImage() {
    const newImage = prompt("Insira uma url de imagem:");
    const validImage = isImage(newImage);
    if (newImage !== "" && validImage) {
      setUserImage(newImage);
    } else {
      alert(
        "Para trocar a imagem de usuário clique sobre ela e insira uma url de imagem válida"
      );
    }
  }

  return (
    <div class="personal-info" data-test="user">
      <img src={userImage} alt="" onClick={changeUserImage} />
      <div class="personal_info-data">
        <h2>{props.userName}</h2>
        <div className="personal-info-username-box">
          <p>{username}</p>{" "}
          <IoPencilOutline
            onClick={() => {
              setUsername(prompt("Mude o nome de usuário"));
            }}
          />
        </div>
      </div>
    </div>
  );
}

import React from "react"
import { useState } from "react"

import {IoPencilOutline} from "react-icons/io5"

import CatanaImage from "../images/catanacomics 1.png"

export default function Usuario() {
    const [username, setUsername] = useState("Catana")

    return(
        <div class="personal-info">
          <img src={CatanaImage} alt="" />
          <div class="personal_info-data">
            <h2>catanacomics</h2> 
            <div className="personal-info-username-box">
            <p>{username}</p> <IoPencilOutline onClick={()=>{setUsername(prompt("Mude o nome de usuário"))}} />
            </div>
          </div>
        </div>
    )
}
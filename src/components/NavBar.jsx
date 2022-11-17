import React from "react";
import instagramLogo from "../images/instagram-logo.svg";
import {FiInstagram} from "react-icons/fi"
import {IoPaperPlaneOutline} from "react-icons/io5"
import {IoHeartOutline} from "react-icons/io5"
import {IoCompassOutline} from "react-icons/io5"
import {IoPersonOutline} from "react-icons/io5"
export default function NavBar() {
    return(
        <nav>
            <div className="nav_logo-container">
                <FiInstagram className="insta-icon" />
                <div className="nav_logo-bar"></div>
                <img src={instagramLogo} alt="" className="nav_instagram-logo" />
            </div>
            <div className="nav_search-container">
                <input type="search" name="" id="" className="search-field" placeholder="Pesquisar" />
            </div>
            <div className="nav_icons-container">
                <IoPaperPlaneOutline className="icons"/>
                <IoHeartOutline className="icons hidden-icons" />
                <IoCompassOutline className="icons hidden-icons" />
                <IoPersonOutline className="icons hidden-icons" />
            </div>
        </nav>  
    )
}
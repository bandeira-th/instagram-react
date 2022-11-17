import React from "react"

import Arrow from "../images/arrow.png"
import Img0 from "../images/stories-imgs/9gag 1.svg"
import Img1 from "../images/stories-imgs/meowed 1.svg"
import Img2 from "../images/stories-imgs/barked 1.svg"
import Img3 from "../images/stories-imgs/nathanwpylestrangeplanet 1.svg"
import Img4 from "../images/stories-imgs/wawawiwacomicsa 1.svg"
import Img5 from "../images/stories-imgs/respondeai 1.svg"
import Img6 from "../images/stories-imgs/filomoderna 1.svg"
import Img7 from "../images/stories-imgs/memeriagourmet 1.svg"

import Story from "./Story"

export default function Stories() {
    
    const stories = [
        {image: Img0, title:"9gag"},
        {image: Img1, title:"9gag"},
        {image: Img2, title:"9gag"},
        {image: Img3, title:"9gag"},
        {image: Img4, title:"9gag"},
        {image: Img5, title:"9gag"},
        {image: Img6, title:"9gag"},
        {image: Img7, title:"9gag"},
    ]
    return (
        <div class="container_stories">
            <img src={Arrow} alt="" class="arrow" />
            {stories.map((story)=>{
                return <Story image={story.image} title={story.title}/>
            })}     
      </div>
    )
}
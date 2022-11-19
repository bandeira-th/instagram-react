import React from "react"
import Posts from "./Posts";
import Stories from "./Stories";
export default function ContainerCentral() {
    return (
        <div class="container_central">
            <Stories />
            <Posts />
        </div>
    )
}
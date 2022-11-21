import React from "react"
import Sugestoes from "./Sugestoes"



import Usuario from "./Usuario"

import CatanaImage from "../images/catanacomics 1.png"

export default function SideBar() {

    
    return (
    <aside>
      <div class="aside-content">
        <Usuario userName = "catanacomics" userTitle ="Catana" userImage={CatanaImage}/>
        <div class="sugestions">
          <div class="sugestions_title">
            <h4>Sugestões para você</h4> <a href="#">Ver tudo</a>
          </div>
          
          <Sugestoes />
      
          <p class="aside_site-info">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
            Termos • Localizações • Contas mais relevantes • Hashtags • 
            Idioma
          </p>
          <p class="aside_site-copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </p>
        </div>
        
      </div>
      
    </aside>
    )
}
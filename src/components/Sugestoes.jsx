import React from "react";
import Sugestao from "./Sugestao";

import BadVibeMemesIcon from "../images/badvibesmemes 1.png"
import ChibirdatIcon from "../images/chibirdart 1.png"
import RazoesParaAcreditarIcon from "../images/razoesparaacreditar 1.png"
import AdorableAnimalsIcon from "../images/adorableanimals 1.png"
import SmallCuteCatsIcon from "../images/smallcutecats 1.png"

export default function Sugestoes() {
    const sugestions = [
        {sImage: BadVibeMemesIcon, sTitle: "bad.vibes.memes"},
        {sImage: ChibirdatIcon, sTitle: "chibirdart"},
        {sImage: RazoesParaAcreditarIcon, sTitle: "razoesparaacreditar"},
        {sImage: AdorableAnimalsIcon, sTitle: "adorable_animals"},
        {sImage: SmallCuteCatsIcon, sTitle: "smallcutecats"}
      ]
  return (
    <div class="sugestions_items">
      {sugestions.map((sugestion) => (
        <Sugestao image={sugestion.sImage} tilte={sugestion.sTitle} />
      ))}
    </div>
  );
}

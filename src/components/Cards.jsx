import { DivCard, Button, DivCards } from "../styles/Cards";
import seta_play from "../assets/seta_play.png";
import { useState } from "react";

export default function Cards({ items }) {
  return (
    <DivCards>
      {items.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </DivCards>
  );
}

function Card({ text }) {
  /* 
  closed
  open
  flipped
  completed
  
  anwser

  */
  const [card, setCard] = useState({ state: "closed" });

  return (
    <DivCard data-test="flashcard" state={"closed"}>
      <h2 data-test="flashcard-text">{text}</h2>
      <Button data-test="play-btn" image_url={seta_play}></Button>
    </DivCard>
  );
}

function Answer() {}

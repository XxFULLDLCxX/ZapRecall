import { DivCard, Button, DivCards, DivAnswer } from "../styles/Cards";
import { useState } from "react";
import { css, styled } from "styled-components";
import play_btn from "../assets/seta_play.png";
import flip_btn from "../assets/seta_virar.png";
import icon_error from "../assets/icone_erro.png";
import icon_almost from "../assets/icone_quase.png";
import icon_correct from "../assets/icone_certo.png";

export default function Cards({ items, cards, setters }) {
  return (
    <DivCards>
      {items.map((item, index) => (
        <Card key={index} id={index + 1} item={item} cards={cards} setters={setters} />
      ))}
    </DivCards>
  );
}

function Card({ id, item, cards, setters }) {
  const [card, setCard] = useState({ state: "closed" });

  const settings = {
    closed: {
      data: {
        button: css`
          background-image: url(${play_btn});
          width: 20px;
        `,
        "data-test": "play-btn",
      },
    },
    open: {
      data: {
        button: css`
          background-image: url(${flip_btn});
          width: 30px;
          height: 20px;
          margin-left: auto;
        `,
        "data-test": "turn-btn",
      },
    },
    completed: {
      data: {
        h2: css`
          text-decoration-line: line-through;
          color: ${{ x: "#FF3030", o: "#FF922E", v: "#2FBE34" }[cards[id]]};
        `,
        button: css`
          background-image: url(${{ x: icon_error, o: icon_almost, v: icon_correct }[cards[id]]});
        `,
        "data-test": { x: "no-icon", o: "partial-icon", v: "zap-icon" }[cards[id]],
      },
    },
  };
  const alternate = { closed: "open", open: "flipped", flipped: "completed", completed: "completed" }[card.state];
  const updateCard = () => setCard({ ...card, state: alternate });

  const data = card.state in settings ? settings[card.state].data : {};
  const text = { closed: `Pergunta ${id}`, open: item.question, flipped: item.answer, completed: `Pergunta ${id}` };

  return (
    <DivCard data-test="flashcard" state={card.state} $h2={data.h2}>
      <h2 test="flashcard-text">{text[card.state]}</h2>
      {card.state !== "flipped" && <Button $css={data.button} $data={data} onClick={updateCard}></Button>}
      {card.state === "flipped" && <Answer id={id} card={card} cards={cards} setters={{ ...setters, setCard }} />}
    </DivCard>
  );
}

function Answer({ id, card, cards, setters }) {
  const data = (color) => {
    return css`
      width: 85.17px;
      height: 37.17px;
      background: ${color};
    `;
  };

  const pressedAnswer = (key) => {
    console.log(card.state);
    if (card.state !== "completed") {
      const new_cards = { ...cards };
      new_cards[id] = key;
      setters.setCards(new_cards);
      setters.setCard({ ...card, state: "completed" });
    }
  };

  return (
    <DivAnswer>
      <Button data-test="no-btn" onClick={() => pressedAnswer("x")} $css={data("#FF3030")}>
        Não lembrei
      </Button>
      <Button data-test="partial-btn" onClick={() => pressedAnswer("o")} $css={data("#FF922E")}>
        Quase não lembrei
      </Button>
      <Button data-test="zap-btn" onClick={() => pressedAnswer("v")} $css={data("#2FBE34")}>
        Zap!
      </Button>
    </DivAnswer>
  );
}

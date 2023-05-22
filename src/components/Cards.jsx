import { DivCard, Button, DivCards, DivAnswer } from "../styles/Cards";
import { useState } from "react";
import { css, styled } from "styled-components";
import play_btn from "../assets/seta_play.png";
import flip_btn from "../assets/seta_virar.png";
import icon_error from "../assets/icone_erro.png";
import icon_almost from "../assets/icone_quase.png";
import icon_correct from "../assets/icone_certo.png";

export default function Cards({ cards, completed_cards, setters }) {
  return (
    <DivCards>
      {cards.map((card, index) => (
        <Card key={index} id={index + 1} card={card} completed_cards={completed_cards} setters={setters} />
      ))}
    </DivCards>
  );
}

function Card({ id, card, completed_cards, setters }) {
  const [state, setState] = useState("closed");

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
          color: ${{ x: "#FF3030", o: "#FF922E", v: "#2FBE34" }[completed_cards.mapping[id]]};
        `,
        button: css`
          background-image: url(${{ x: icon_error, o: icon_almost, v: icon_correct }[completed_cards.mapping[id]]});
        `,
        "data-test": { x: "no-icon", o: "partial-icon", v: "zap-icon" }[completed_cards.mapping[id]],
      },
    },
  };
  const alternate = { closed: "open", open: "flipped", flipped: "completed", completed: "completed" }[state];

  const data = state in settings ? settings[state].data : {};
  const text = { closed: `Pergunta ${id}`, open: card.question, flipped: card.answer, completed: `Pergunta ${id}` };

  return (
    <DivCard data-test="flashcard" state={state} $h2={data.h2}>
      <h2 data-test="flashcard-text">{text[state]}</h2>
      {state !== "flipped" && <Button $css={data.button} $data={data} onClick={() => setState(alternate)}></Button>}
      {state === "flipped" && (
        <Answer id={id} state={state} completed_cards={completed_cards} setters={{ ...setters, setState }} />
      )}
    </DivCard>
  );
}

function Answer({ id, state, completed_cards, setters }) {
  const data = (color) => {
    return css`
      width: 85.17px;
      height: 37.17px;
      background: ${color};
    `;
  };

  const pressedAnswer = (key) => {
    if (state !== "completed") {
      setters.setCompletedCards({
        list: [...completed_cards.list, key],
        mapping: { ...completed_cards.mapping, [id]: key },
      });
      setters.setState("completed");
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

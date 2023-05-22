import { DivCount, DivMessage } from "../styles/Count";
import icon_error from "../assets/icone_erro.png";
import icon_almost from "../assets/icone_quase.png";
import icon_correct from "../assets/icone_certo.png";
import emoji_sad from "../assets/sad.png";
import emoji_party from "../assets/party.png";

function Count({ cards, completed_cards }) {
  console.log(cards, completed_cards);
  const icons_sequence = {
    x: { src: icon_error, alt: "errado", "data-test": "no-icon" },
    o: { src: icon_almost, alt: "quase", "data-test": "partial-icon" },
    v: { src: icon_correct, alt: "certo", "data-test": "zap-icon" },
  };
  const messages = {
    party: {
      title: "Parabéns!",
      emoji: { src: emoji_party, alt: "Carinha de Festa" },
      text: "Você não esqueceu de nenhum flashcard!",
    },
    sad: {
      title: "Putz...",
      emoji: { src: emoji_sad, alt: "Carinha de Preocupação" },
      text: "Ainda faltam alguns... Mas não desanime!",
    },
  };
  const type = completed_cards.list.includes("x") ? "sad" : "party";
  const completed = completed_cards.list.length === cards.length;

  return (
    <DivCount data-test="footer">
      {completed && <Message emoji={messages[type].emoji} title={messages[type].title} text={messages[type].text} />}
      <h3>
        {completed_cards.list.length}/{cards.length} CONCLUÍDOS
      </h3>
      <div>
        {completed_cards.list.map((c, index) => (
          <img
            key={index}
            data-test={icons_sequence[c]["data-test"]}
            src={icons_sequence[c].src}
            alt={`o card nº ${index + 1} foi ${icons_sequence[c].alt}`}
          />
        ))}
      </div>
    </DivCount>
  );
}

function Message({ emoji, title, text }) {
  return (
    <DivMessage>
      <div data-test="finish-text">
        <img src={emoji.src} alt={emoji.alt} />
        <h2>{title}</h2>
      </div>
      <p>{text}</p>
    </DivMessage>
  );
}

export default Count;

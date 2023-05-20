import { useState } from "react";
import { Section, Header, Main, Footer } from "../styles";
import Cards from "./Cards";
import Count from "./Count";
import flash from "../assets/logo.png";

function Body() {
  const [completed_cards, setCards] = useState([{}]);

  const cards = [
    { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    {
      question: "Usamos estado (state) para __",
      answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];

  return (
    <Section>
      <Header>
        <img src={flash} alt="Logo de Raio" />
        <h1>ZapRecall</h1>
      </Header>
      <Main>
        <Cards items={cards} cards={completed_cards} setters={{ setCards }} />
      </Main>
      <Footer>
        <Count items={cards} cards={completed_cards} />
      </Footer>
    </Section>
  );
}

export default Body;

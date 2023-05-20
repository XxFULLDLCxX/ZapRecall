import { DivCount } from "../styles/Count";

function Count({ items, cards }) {
  console.log(cards);
  return (
    <DivCount data-test="footer">
      <h3>
        {Object.keys(cards).length - 1}/{items.length} CONCLUÍDOS
      </h3>
    </DivCount>
  );
}

export default Count;

import { DivCount } from "../styles/Count";

function Count({ items, completed_cards }) {
  return (
    <DivCount data-test="footer">
      <h3>
        {completed_cards.length}/{items.length} CONCLUÍDOS
      </h3>
    </DivCount>
  );
}

export default Count;

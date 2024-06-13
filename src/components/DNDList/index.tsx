import { useState } from "react";
import { DNDListInitialValue, IListItem } from "../../constants";
import Card from "../Card";

export default function DNDList() {
  const [cards, setCards] = useState(DNDListInitialValue);
  return (
    <div style={{ width: 400 }}>
      {cards.map((card, i) => (
        <Card
          key={card.id}
          index={i}
          id={card.id}
          text={card.text}
          moveCard={(dragIndex: number, hoverIndex: number) => {
            const newCards = [...cards];
            setCards(() => {
              const draggableItem = newCards[dragIndex];
              newCards.splice(dragIndex, 1, newCards[hoverIndex]); //Удалем из карточек элемент, который потянули(drag) и вместо него кладём элемент, над которым решили отпустить потянутый элемент
              newCards.splice(hoverIndex, 1, draggableItem); //Удаляем элемент, над которым зависли, и заменяем его элементом, который потянули.
              return newCards;
            });
          }}
        />
      ))}
    </div>
  );
}

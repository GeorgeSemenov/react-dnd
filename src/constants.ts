export const ItemTypes = {
  KNIGHT: "knight",
  CARD: "card",
};

export interface IListItem {
  id: number;
  text: string;
}

export interface IListState {
  items: IListItem[];
}

export const DNDListInitialValue: IListItem[] = [
  {
    id: 1,
    text: "lol",
  },
  {
    id: 2,
    text: "kek",
  },
  {
    id: 3,
    text: "modul",
  },
  {
    id: 4,
    text: "zakekstchik",
  },
];

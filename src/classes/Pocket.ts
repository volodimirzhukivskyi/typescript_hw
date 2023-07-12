import { CurrencyEnum } from "../enums/CurrencyEnum";
import ICard from "../interfaces/ICard";

export default class Pocket {
  cardsMap: Map<string, ICard>;

  constructor(private readonly cardsUser: ICard[]) {
    this.cardsMap = this.setAllCards(cardsUser);
  }
  setAllCards(cards: ICard[]): Map<string, ICard> {
    let map = new Map();
    cards.forEach((card, i) => map.set(`defaultValueCard${i}`, card));
    return map;
  }
  addCart(name: string, card: ICard) {
    this.cardsMap.set(name, card);
  }
  removeCard(name: string) {
    this.cardsMap.delete(name);
  }
  getCard(name: string): ICard | undefined {
    return this.cardsMap.get(name);
  }
  getTotalAmount(getCurrency: CurrencyEnum): number {
    let totalBalance: number = 0;
    for (let card of this.cardsMap.values()) {
      totalBalance += card.getBalance(getCurrency);
    }
    return totalBalance;
  }
}

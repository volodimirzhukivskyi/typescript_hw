import { CurrencyEnum } from "../../enums/CurrencyEnum";
import ICard from "../../interfaces/ICard";
import Transaction from "../transaction/Transaction";

export default class ProxyCard implements ICard {
  #realCard: ICard;
  constructor(realCard: ICard) {
    this.#realCard = realCard;
  }
  logerMethod(
    type: "funcName" | "parametrs" | "emptyStrParametrs",
    message?: string,
  ): void {
    switch (type) {
      case "funcName":
        console.log(`Виконана функція  - ${message}`);
        break;
      case "parametrs":
        console.log(`У функції такі параметри  - ${message}`);
        break;
      case "emptyStrParametrs":
        console.log(`У функції відсутні параметри!`);
        break;
      default:
        console.log("Помилка типу");
    }
  }
  getLastTransaction(): Transaction | undefined {
    this.logerMethod("funcName", "getLastTransaction");
    this.logerMethod("emptyStrParametrs");
    return this.#realCard.getLastTransaction();
  }

  addTransaction(
    currency: Transaction | CurrencyEnum,
    amount?: number,
  ): string {
    this.logerMethod("funcName", "addTransaction");
    if (currency instanceof Transaction) {
      this.logerMethod("parametrs", "currency:Transaction");
      return this.#realCard.addTransaction(currency);
    } else if (amount) {
      this.logerMethod("parametrs", "currency:CurrencyEnum,amount:string");
      return this.#realCard.addTransaction(currency, amount);
    } else {
      return "Error addTransaction method";
    }
  }
  getTrasaction(id: string): Transaction | undefined {
    this.logerMethod("funcName", "getTrasaction");
    this.logerMethod("parametrs", "id: string");
    return this.#realCard.getTrasaction(id);
  }
  getBalance(getCurrency: CurrencyEnum): number {
    this.logerMethod("funcName", "getBalance");
    this.logerMethod("parametrs", "getCurrency: CurrencyEnum");
    return this.#realCard.getBalance(getCurrency);
  }
}

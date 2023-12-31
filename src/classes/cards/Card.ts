import { CurrencyEnum } from "../../enums/CurrencyEnum";
import ICard from "../../interfaces/ICard";
import Transaction from "../transaction/Transaction";

export default class Card implements ICard {
  #transactions: Transaction[] = [];

  addTransaction(val1: Transaction | CurrencyEnum, val2?: number): string {
    let newTransaction: Transaction;
    if (val1 instanceof Transaction) {
      newTransaction = val1;
    } else if (val2) {
      newTransaction = new Transaction(val2, val1);
    } else {
      throw new Error("Error create transaction");
    }

    this.#transactions.push(newTransaction);
    return newTransaction.id;
  }
  revert() {
    this.#transactions.pop();
  }
  getLastTransaction() {
    return this.#transactions[this.#transactions.length - 1];
  }
  getTrasaction(id: string): Transaction | undefined {
    return this.#transactions.find((el) => el.id === id);
  }
  getBalance(getCurrency: CurrencyEnum): number {
    return this.#transactions.reduce((prev, current) => {
      const { currency, amount } = current;
      return currency === getCurrency ? prev + amount : prev;
    }, 0);
  }
}

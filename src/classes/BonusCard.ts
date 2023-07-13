import { CurrencyEnum } from "../enums/CurrencyEnum";
import Card from "./Card";
import Transaction from "./Transaction";

export default class BonusCard extends Card {
  constructor(protected transactions: Transaction[]) {
    super(transactions);
  }
  addTransaction(val1: Transaction|CurrencyEnum, val2?: number): string {
    const createTransactionId = super.addTransaction(val1, val2);
    const findTransaction = this.getTrasaction(createTransactionId);

    if (findTransaction) {
      const { currency, amount } = findTransaction;
      const bonusAmount = amount * 0.1;
      return super.addTransaction(currency, bonusAmount);
    } else {
      return "Sorry, no find transaction";
    }
  }
}

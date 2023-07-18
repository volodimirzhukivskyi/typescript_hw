import { CurrencyEnum } from "../../enums/CurrencyEnum";
import Transaction from "../transaction/Transaction";
import Card from "./Card";

export default class BonusCard extends Card {
  addTransaction(val1: Transaction | CurrencyEnum, val2?: number): string {
    const createTransactionId = super.addTransaction(val1, val2);
    const findTransaction = this.getTrasaction(createTransactionId);

    if (findTransaction) {
      const { currency, amount } = findTransaction;
      const bonusAmount = amount * 0.1;
      return super.addTransaction(currency, bonusAmount);
    } else {
      throw new Error("Sorry, no find transaction");
    }
  }
}

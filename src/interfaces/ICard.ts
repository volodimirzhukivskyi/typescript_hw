import Transaction from "../classes/Transaction";
import { CurrencyEnum } from "../enums/CurrencyEnum";

export default interface ICard {
  addTransaction(transaction: Transaction): string;
  addTransaction(currency: CurrencyEnum, amount: number): string;
  getTrasaction(id: string): Transaction | undefined;
  getBalance(getCurrency: CurrencyEnum): number;
}

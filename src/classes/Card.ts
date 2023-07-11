import { CurrencyEnum } from "../enums/CurrencyEnum";
import Transaction from "./Transaction";

export default class Card {
  constructor(public transactions: Transaction[]) {}

  addTransaction(transaction: Transaction): string;
  addTransaction(currency: CurrencyEnum, amount: number): string;
  addTransaction(val1: any, val2?: any): string {
    let newTransaction: Transaction;

    if (val1 && val2) {
      newTransaction = new Transaction(val2,val1);
    } else {
      newTransaction = val1;
    }
    this.transactions.push(newTransaction);
    return newTransaction.id;
  }
  getTrasaction(id: string): Transaction | undefined {
    return this.transactions.find((el) => el.id === id);
  }
  getBalance(getCurrency: CurrencyEnum): number {
    return this.transactions.reduce((prev, current) => {
      const { currency, amount } = current;
      const addNumber: number = currency === getCurrency ? amount : 0;
      return prev + addNumber;
    }, 0);
  }
}

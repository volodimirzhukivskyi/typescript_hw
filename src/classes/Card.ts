import { CurrencyEnum } from "../enums/CurrencyEnum";
import ICard from "../interfaces/ICard";
import Transaction from "./Transaction";

export default class Card implements ICard {
  constructor(public transactions: Transaction[]) {}

  addTransaction(val1: any, val2?: any): string {
    let isData: boolean = val1 && val2;
    let newTransaction: Transaction = isData
      ? new Transaction(val2, val1)
      : val1;
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

import { CurrencyEnum } from "../enums/CurrencyEnum";
import Helper from "../helpers/Helper";

export default class Transaction {
  public id: string;
  constructor(public amount: number, public currency: CurrencyEnum) {
    this.id = Helper.generateUid();
  }
}

import { CurrencyEnum } from "../enums/CurrencyEnum";
import {generateUid} from "../helpers/helpers";

export default class Transaction {
  public id: string;
  constructor(public amount: number, public currency: CurrencyEnum) {
    this.id = generateUid();
  }
}

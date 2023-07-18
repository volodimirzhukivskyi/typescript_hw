import { CurrencyEnum } from "../../enums/CurrencyEnum";
import { generateUid } from "../../helpers/helpers";
import Itransaction from "./interface/Itransaction";

export default class Transaction implements Itransaction {
  public id: string;
  constructor(public amount: number, public currency: CurrencyEnum) {
    this.id = generateUid();
  }
  amountLabel(): string {
    return `${this.amount}${this.currency}`
  }

}

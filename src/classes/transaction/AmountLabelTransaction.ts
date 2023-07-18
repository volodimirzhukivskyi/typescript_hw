import { getValue } from "../../helpers/helpers";
import TransactionDecorator from "./decorator/TransactionDecorator";

export default class AmountLabelTransaction extends TransactionDecorator {
  amountLabel(): string {
    let wrapperStrt = this.wrapper.amountLabel();
    return getValue(wrapperStrt);
  }
}

import Card from "./classes/Card";
import Transaction from "./classes/Transaction";
import { CurrencyEnum } from "./enums/CurrencyEnum";

const transaction1 = new Transaction(250, CurrencyEnum.UAH  );
const transaction2 = new Transaction(100, CurrencyEnum.UAH);
const transaction3 = new Transaction(200, CurrencyEnum.USD);

const card = new Card([transaction1,transaction2]);
console.log(card.addTransaction(CurrencyEnum.USD,24));
console.log(card.addTransaction(transaction3));
console.log(card.getTrasaction(transaction2.id));
console.log(card.getBalance(CurrencyEnum.UAH));




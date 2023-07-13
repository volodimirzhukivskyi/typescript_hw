import BonusCard from "./classes/BonusCard";
import Card from "./classes/Card";
import Pocket from "./classes/Pocket";
import Transaction from "./classes/Transaction";
import { CurrencyEnum } from "./enums/CurrencyEnum";

const transaction1 = new Transaction(250, CurrencyEnum.UAH  );
const transaction2 = new Transaction(100, CurrencyEnum.UAH);
const transaction3 = new Transaction(200, CurrencyEnum.USD);
const transaction4 = new Transaction(100, CurrencyEnum.USD);
const transaction5 = new Transaction(200, CurrencyEnum.USD);

const card1 = new Card([transaction1,transaction2]);
const card2 = new Card([transaction3]);
// First hw
// console.log(card.addTransaction(CurrencyEnum.USD,24));
// console.log(card.addTransaction(transaction3));
// console.log(card.getTrasaction(transaction2.id));
// console.log(card.getBalance(CurrencyEnum.UAH));

const bonusCard = new BonusCard([transaction5])
bonusCard.addTransaction(transaction4)
const pocket = new Pocket([card1,card2]);
console.log(bonusCard);
pocket.addCart("bonusCard",bonusCard);
console.log(pocket);
console.log(pocket.getCard("defaultValueCard0"));
console.log(pocket.getTotalAmount(CurrencyEnum.USD));
console.log(pocket.removeCard("bonusCard"));
console.log(pocket);







import BonusCard from "./classes/cards/BonusCard";
import Card from "./classes/cards/Card";
import ProxyCard from "./classes/cards/ProxyCard";
import Pocket from "./classes/Pocket";
import AmountLabelTransaction from "./classes/transaction/AmountLabelTransaction";
import Transaction from "./classes/transaction/Transaction";
import { CurrencyEnum } from "./enums/CurrencyEnum";

const transaction3 = new Transaction(200, CurrencyEnum.USD);
const transaction4 = new Transaction(100, CurrencyEnum.USD);
const transaction5 = new Transaction(350, CurrencyEnum.USD);
const card1 = new Card();
const card2 = new Card();

const amountLabelTransaction = new AmountLabelTransaction(transaction3);
console.log(amountLabelTransaction.amountLabel());

const bonusCard = new BonusCard();
bonusCard.addTransaction(transaction4);
console.log(bonusCard.getLastTransaction());
bonusCard.revert();
console.log(bonusCard.getLastTransaction());

const proxyCard = new ProxyCard(bonusCard);
proxyCard.addTransaction(transaction5)

const pocket = Pocket.getInstance();
const pocketSameObj = Pocket.getInstance();
if (pocket === pocketSameObj) {
  console.log("same object!");
} else {
  console.log("various objects");
}

// First hw
// console.log(card.addTransaction(CurrencyEnum.USD,24));
// console.log(card.addTransaction(transaction3));
// console.log(card.getTrasaction(transaction2.id));
// console.log(card.getBalance(CurrencyEnum.UAH));
// console.log(bonusCard);
// pocket.addCart("bonusCard", bonusCard);
// console.log(pocket);
// console.log(pocket.getCard("defaultValueCard0"));
// console.log(pocket.getTotalAmount(CurrencyEnum.USD));
// console.log(pocket.removeCard("bonusCard"));
// console.log(pocket);

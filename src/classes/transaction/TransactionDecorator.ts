class TransactionDecorator implements Itransaction {
  protected wrapper: Itransaction;
  constructor(source: Itransaction) {
    this.wrapper = source;
  }
  amountLabel(): string {
  return this.wrapper.amountLabel()
  }
}

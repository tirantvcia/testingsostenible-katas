export class Transaction {
  public date: string;
  public amount: number;
  constructor(date: string, amount: number) {
    this.date = date;
    this.amount = amount;
  }
}

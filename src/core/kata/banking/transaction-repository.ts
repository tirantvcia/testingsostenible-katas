import { Clock } from "./Clock";
import { Transaction } from "./Transaction";
export class TransactionRepository {
  transactions: Transaction[] = [];

  constructor(private clock: Clock) {}
  addDeposit(amount: number) {
    this.transactions.push(new Transaction(this.clock.todayAsString(), amount));
  }
  addWithdrawal(amount: number) {}
  allTransactions() {
    return this.transactions;
  }
}

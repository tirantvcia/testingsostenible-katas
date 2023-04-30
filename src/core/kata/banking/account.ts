import { TransactionRepository } from "./transaction-repository";
export class Account {
  constructor(private repository: TransactionRepository) {}
  deposit(quantity: number) {
    this.repository.addDeposit(quantity);
  }
  withdraw(quantity: number) {
    this.repository.addWithdrawal(quantity);
  }
  printStatement() {}
}

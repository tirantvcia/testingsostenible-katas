import { TransactionRepository } from "./transaction-repository";
import { StatementPrinter } from "./StatementPrinter";

export class Account {
  constructor(
    private repository: TransactionRepository,
    private statementPrinter: StatementPrinter
  ) {}
  deposit(quantity: number) {
    this.repository.addDeposit(quantity);
  }
  withdraw(quantity: number) {
    this.repository.addWithdrawal(quantity);
  }
  printStatement() {
    this.statementPrinter.print(this.repository.allTransactions());
  }
}

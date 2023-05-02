import { Transaction } from "./Transaction";
import { Console } from "./console";
export class StatementPrinter {
  constructor(private console: Console) {}
  private readonly header = "Date       | Amount    | Balance";
  print(transactions: Transaction[]) {
    this.console.log(this.header);
    let runningBalance = 0;
    if (transactions.length > 0) {
      const transaction = transactions[0];
      runningBalance += transaction.amount;
      this.formatStatementLine(transaction, runningBalance);
    }
  }

  private formatStatementLine(
    transaction: Transaction,
    runningBalance: number
  ) {
    const formattedAmount = transaction.amount.toFixed(2);
    const formattedBalance = runningBalance.toFixed(2);
    this.console.log(
      `${transaction.date} | ${formattedAmount}   | ${formattedBalance}`
    );
  }
}

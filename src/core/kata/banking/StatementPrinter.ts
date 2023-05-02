import { Transaction } from "./Transaction";
import { Console } from "./console";
export class StatementPrinter {
  constructor(private console: Console) {}
  private readonly header = "Date       | Amount    | Balance";
  print(transacionts: Transaction[]) {
    this.console.log(this.header);
  }
}

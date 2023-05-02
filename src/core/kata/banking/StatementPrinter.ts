import { Transaction } from "./Transaction";
import { Console } from "./console";
export class StatementPrinter {
  constructor(private console: Console) {}
  print(transacionts: Transaction[]) {
    this.console.log("Date       | Amount    | Balance");
  }
}

import { Console } from "../../../../core/kata/banking/console";
import { StatementPrinter } from "../../../../core/kata/banking/StatementPrinter";
import { Transaction } from "../../../../core/kata/banking/Transaction";
import { Clock } from "../../../../core/kata/banking/Clock";
describe("The printStatement", () => {
  const console = new Console();
  let consoleSpy = jest.spyOn(console, "log");
  let statementPrinter = new StatementPrinter(console);
  it("siempre imprime la cabecera a través de la consola", () => {
    let transactions: Transaction[] = [];
    statementPrinter.print(transactions);
    expect(consoleSpy).toHaveBeenCalledWith("Date       | Amount    | Balance");
  });
  it("imprime una transacción a través de la consola", () => {
    const today = "14/01/2022";
    const amount = 2000.0;

    const transactions = [new Transaction(today, amount)];
    statementPrinter.print(transactions);
    expect(consoleSpy).toHaveBeenCalledWith("Date       | Amount    | Balance");
    expect(consoleSpy).toHaveBeenCalledWith("14/01/2022 | 2000.00   | 2000.00");
  });
});

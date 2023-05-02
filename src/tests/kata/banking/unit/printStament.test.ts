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
  it("imprime múltiples transacciones a través de la consola", () => {
    const transactions = [
      new Transaction("14/01/2022", 2000.0),
      new Transaction("15/01/2022", -1000.0),
      new Transaction("16/01/2022", 500.0),
    ];
    statementPrinter.print(transactions);
    expect(consoleSpy).toHaveBeenCalledWith("Date       | Amount    | Balance");
    expect(consoleSpy).toHaveBeenCalledWith("16/01/2022 | 500.00   | 1500.00");
    expect(consoleSpy).toHaveBeenCalledWith(
      "15/01/2022 | -1000.00   | 1000.00"
    );
    expect(consoleSpy).toHaveBeenCalledWith("14/01/2022 | 2000.00   | 2000.00");
  });
});

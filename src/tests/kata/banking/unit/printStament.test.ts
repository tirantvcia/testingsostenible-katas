import { Console } from "../../../../core/kata/banking/console";
import { StatementPrinter } from "../../../../core/kata/banking/StatementPrinter";
import { Transaction } from "../../../../core/kata/banking/Transaction";
describe("The printStatement", () => {
  const console = new Console();
  let consoleSpy = jest.spyOn(Console, "log");
  let statementPrinter = new StatementPrinter(console);
  it("siempre imprime la cabecera a través de la consola", () => {
    let transactions: Transaction[] = [];
    statementPrinter.print(transactions);
    expect(consoleSpy).toHaveBeenCalledWith("Date       | Amount    | Balance");
  });
});

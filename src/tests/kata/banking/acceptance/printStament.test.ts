import { Console } from "../../../../core/kata/banking/console";
import { Account } from "../../../../core/kata/banking/account";
import { TransactionRepository } from "../../../../core/kata/banking/transaction-repository";
import { StatementPrinter } from "../unit/Account.test";
/*
Nuestra aplicación debe permitir:
    Hacer un depósito en la cuenta
    Retirar de la cuenta
    Imprimir los asientos de la cuenta a través de la consola
El resultado de imprimir los asientos debe ser como el siguiente:

Date       | Amount | Balance
14/01/2022 | 2000.00   | 2500.00
13/01/2022 | -500.00   | 500.00
10/01/2022 | 1000.00   | 1000.00
*/

describe("Print Stament", () => {
  const console = new Console();
  let consoleSpy = jest.spyOn(console, "log");
  let repository = new TransactionRepository();
  let statementPrinter = new StatementPrinter();
  const account = new Account(repository, statementPrinter);

  it("imprime el estado de la cuenta con sus transacciones por consola", () => {});
  account.deposit(1000.0);
  account.withdraw(500.0);
  account.deposit(2000.0);
  account.printStatement();
  expect(consoleSpy).toHaveBeenCalledWith("Date       | Amount | Balance");
  expect(consoleSpy).toHaveBeenCalledWith("14/01/2022 | 2000.00   | 2500.00");
  expect(consoleSpy).toHaveBeenCalledWith("13/01/2022 | -500.00   | 500.00");
  expect(consoleSpy).toHaveBeenCalledWith("10/01/2022 | 1000.00   | 1000.00");
});

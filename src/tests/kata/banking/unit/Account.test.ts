import { Transaction } from "../../../../core/kata/banking/Transaction";
import { StatementPrinter } from "../../../../core/kata/banking/StatementPrinter";
import { Account } from "../../../../core/kata/banking/account";
import { TransactionRepository } from "../../../../core/kata/banking/transaction-repository";
import { Clock } from "../../../../core/kata/banking/Clock";
import { Console } from "../../../../core/kata/banking/console";

describe("The Account", () => {
  let console = new Console();
  let repository = new TransactionRepository(new Clock());
  let statementPrinter = new StatementPrinter(console);
  let account = new Account(repository, statementPrinter);
  let addDepositSpy = jest.spyOn(repository, "addDeposit");
  let addWithdrawalSpy = jest.spyOn(repository, "addWithdrawal");

  let printStamentSpy = jest.spyOn(statementPrinter, "print");

  it("guarda una transaccion deposito a través del repositorio", () => {
    account.deposit(100);
    expect(addDepositSpy).toHaveBeenCalledWith(100);
  });
  it("guarda una transaccion retiro a través del repositorio", () => {
    account.withdraw(500);
    expect(addWithdrawalSpy).toHaveBeenCalledWith(500);
  });
  it("imprime las transacciones a través del impresion de estado", () => {
    const today = "25/03/2022";
    const clock = new Clock();
    clock.todayAsString = () => today;
    const amount = 100;

    const transactions = [
      new Transaction(today, amount),
      new Transaction(today, amount),
    ];
    repository.allTransactions = () => transactions;
    account.printStatement();
    expect(printStamentSpy).toHaveBeenCalledWith(transactions);
  });
});

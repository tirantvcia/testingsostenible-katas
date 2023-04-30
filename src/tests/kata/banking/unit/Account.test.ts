import { Account } from "../../../../core/kata/banking/account";
import { TransactionRepository } from "../../../../core/kata/banking/transaction-repository";

export class Transaction {}
export class StatementPrinter {
  print(transacionts: Transaction[]) {}
}
describe("The Account", () => {
  let repository = new TransactionRepository();
  let statementPrinter = new StatementPrinter();
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
    const transactions = [new Transaction(), new Transaction()];
    repository.allTransactions = () => transactions;
    account.printStatement();
    expect(printStamentSpy).toHaveBeenCalledWith(transactions);
  });
});

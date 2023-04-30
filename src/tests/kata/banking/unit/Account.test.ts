import { Account } from "../../../../core/kata/banking/account";
import { TransactionRepository } from "../../../../core/kata/banking/transaction-repository";

describe("The Account", () => {
  let repository = new TransactionRepository();
  let account = new Account(repository);
  let addDepositSpy = jest.spyOn(repository, "addDeposit");
  it("guarda una transaccion deposito a través del repositorio", () => {
    account.deposit(100);
    expect(addDepositSpy).toHaveBeenCalledWith(100);
  });
});

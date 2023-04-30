import { Transaction } from "../../../../core/kata/banking/Transaction";
import { TransactionRepository } from "../../../../core/kata/banking/transaction-repository";
import { Clock } from "../../../../core/kata/banking/Clock";

describe("The Transaction Repository", () => {
  const today = "25/03/2022";
  const clock = new Clock();
  clock.todayAsString = () => today;
  let repository;
  beforeEach(() => {
    repository = new TransactionRepository(clock);
  });

  it("guarda una transacción de deposito con una cantidad", () => {
    const amount = 100;
    repository.addDeposit(amount);
    const transactions = repository.allTransactions();
    expect(transactions[0]).toEqual(new Transaction(today, amount));
  });
  it("guarda una transacción de retiro con una cantidad", () => {
    const amount = 100;
    repository.addWithdrawal(amount);
    const transactions = repository.allTransactions();
    expect(transactions[0]).toEqual(new Transaction(today, -amount));
  });
});

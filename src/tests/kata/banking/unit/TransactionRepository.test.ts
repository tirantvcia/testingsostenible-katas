import { Transaction } from "../../../../core/kata/banking/Transaction";
import { TransactionRepository } from "../../../../core/kata/banking/transaction-repository";
import { Clock } from "../../../../core/kata/banking/Clock";

describe("The Transaction Repository", () => {
  it("guarda una transacción de deposito con una cantidad", () => {
    const today = "25/03/2022";
    const clock = new Clock();
    clock.todayAsString = () => today;
    const amount = 100;
    const repository = new TransactionRepository(clock);

    const transactions = repository.allTransactions();
    expect(transactions[0]).toEqual(new Transaction(today, amount));
  });
});

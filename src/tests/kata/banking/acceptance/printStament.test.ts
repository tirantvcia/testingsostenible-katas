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

class Console {
  log(message: string) {
    console.log(message);
  }
}

class Account {
  deposit(quantity: number) {}
  withdraw(quantity: number) {}
  printStatement() {}
}

describe("Print Stament", () => {
  const console = new Console();
  let consoleSpy = jest.spyOn(console, "log");
  const account = new Account();

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

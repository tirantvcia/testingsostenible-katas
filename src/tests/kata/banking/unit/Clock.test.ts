import { Clock } from "../../../../core/kata/banking/Clock";
describe("The Clock", () => {
  it("devuelve el dia en formato correcto dd/MM/yyyy", () => {
    const clock = new Clock();
    const date = clock.todayAsString();
    expect(date).toEqual("25/02/2022");
  });
});

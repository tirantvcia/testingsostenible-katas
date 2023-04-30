import { Clock } from "../../../../core/kata/banking/Clock";

class TestableClock extends Clock {
  protected today(): Date {
    return new Date("2022-02-25");
  }
}

describe("The Clock", () => {
  it("devuelve el dia en formato correcto dd/MM/yyyy", () => {
    const clock = new TestableClock();
    const date = clock.todayAsString();
    expect(date).toEqual("25/02/2022");
  });
});

import * as arithmetic from './../arithmetic';
import * as calculator from './../calculator';
/*
describe('The calculator', () => {
    (arithmetic as any).add = jest.fn();
    (arithmetic as any).substract = jest.fn();
    it('calls arithmetic add', () => {
        calculator.doAdd(1, 2);
        expect(arithmetic.add).toHaveBeenCalled();
    })
    it('calls arithmetic substract with right parameters', () => {
        calculator.doSubstract(2, 1);
        expect(arithmetic.substract).toHaveBeenCalledTimes(1);
        expect(arithmetic.substract).toHaveBeenCalledWith(2, 1);
    })

})
*/
describe('The calculator with implementation', () => {
    (arithmetic as any).add = jest.fn(arithmetic.add);
    (arithmetic as any).substract = jest.fn(arithmetic.substract);
    it('calls arithmetic add and the result is right', () => {
        const result = calculator.doAdd(1, 2);
        expect(arithmetic.add).toHaveBeenCalled();
        expect(result).toBe(3);
    })
    it('calls arithmetic substract with right parameters', () => {
        const result = calculator.doSubstract(2, 1);
        expect(arithmetic.substract).toHaveBeenCalledTimes(1);
        expect(arithmetic.substract).toHaveBeenCalledWith(2, 1);
        expect(result).toBe(1);
    })

})
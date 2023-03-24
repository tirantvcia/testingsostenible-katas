import * as arithmetic from '../arithmetic';
import * as calculator from '../calculator';

describe('The calculator', () => {
    it('calls arithmetic add', () => {
        const arithmeticAdd = jest.spyOn(arithmetic, 'add');

        const result = calculator.doAdd(1, 2);
        expect(arithmeticAdd).toHaveBeenCalled();
        expect(result).toBe(3);
    })
    it('calls arithmetic substract with right parameters', () => {
        const arithmeticSubstract = jest.spyOn(arithmetic, 'substract');

        arithmeticSubstract.mockImplementation(() => {
            return -1;
        });
        const result = calculator.doSubstract(2, 1);
        expect(arithmeticSubstract).toHaveBeenCalled();
        expect(result).toBe(-1);
    })

})
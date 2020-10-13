import { incrementar } from './numbers';

describe('2 - Numbers tests', () => {

    it( 'Should return 100 if the num is greater than 100', () => {

        const resp = incrementar(300);

        expect( resp ).toBe(100);
    });

    it('should return the input number (+ 1) if it is not greater than 100', () => {

        const resp = incrementar(50);

        expect ( resp ).toBe(51);
    });

});

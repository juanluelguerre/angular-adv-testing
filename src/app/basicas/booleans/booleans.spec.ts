import { usuarioIngresado } from './booleans';

describe('3 - Booleans Tests', () => {
    it('should return true', () => {
        const resp = usuarioIngresado();

        //expect( resp ).toBe(true);
        expect ( resp ).toBeTruthy();
    });
});
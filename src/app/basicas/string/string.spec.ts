
// describe ('String Tests');
// it('return an string');

import { mensaje } from './string'

describe('1 - Strings tests', () => {

    it('Should return an string', () => {
        const resp = mensaje('Juanlu');
        // expect( (typeof resp) === 'string' )
        expect(typeof resp).toBe('string');
    });

    it('Should return greetings with a name', () => {
        const name = 'juanlu';
        const resp = mensaje( name );

        // Samples:
        // expect( (typeof resp) === 'string' )
        // expect( resp ).toBe('Hi ' + name);

        expect ( resp ).toContain( name );
    });

});

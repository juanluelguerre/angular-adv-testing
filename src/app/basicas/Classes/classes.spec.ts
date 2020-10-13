import { Player } from './classes';

describe('5 - Classes Tests', () => {

    let player = new Player();

    beforeAll ( () => {
        // console.log('beforeAll');
    });

    beforeEach ( () => {
        // console.log('beforeEach');
        // player.hp = 100;
        player = new Player();
    });

    afterAll ( () => {
        // console.log('afterAll');
    });

    afterEach ( () => {
        // console.log('afterEach');
        // player.hp = 100;
    });


    it('should return 80hps if its input is 20 hurts', () => {

        // const player = new Jugador();
        const resp = player.getHurt(20);
        expect( resp ).toBe( 80 );
    });

    it('should return 50hps if its input is 50 hurts', () => {

        // const player = new Jugador();
        const resp = player.getHurt(50);
        expect( resp ).toBe( 50 );
    });

    it('should return 0hps if its input is 100 hurts or upper', () => {

        // const player = new Jugador();
        const resp = player.getHurt(100);
        expect( resp ).toBe( 0 );
    });

});

import { Player2 } from './Player2';

describe('6 - Player 2 Emit', () => {

    let player = new Player2();

    beforeEach ( () => player = new Player2() );

    it('should emit a new event when receives hurts', () => {

        let newhp = 0;

        // Asinchronous function but wait for finalize tests !
        player.hpChanged.subscribe( (hp: any) => {
            newhp = hp;
        });

        player.getHurt(1000);

        expect( newhp ).toBe(0);
    });


    it('should emit a new event when receives hurts and survive if its hurts is less than 100', () => {

        let newhp = 0;

        // Asinchronous function but wait for finalize tests !
        player.hpChanged.subscribe( (hp: any) => newhp = hp);

        player.getHurt(50);

        expect( newhp ).toBe(50);
    });

});

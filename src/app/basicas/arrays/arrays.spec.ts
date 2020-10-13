import { obtenerRobots } from './arrays';

describe('4 - Arrays tests', () => {
    it('Shoud return at least 3 robots', () => {
        expect(obtenerRobots().length).toBeGreaterThanOrEqual(3);
    });

    xit('should exist MegaMan and Ultron', () => {
        expect(obtenerRobots()).toContain('MegaMan');
        expect(obtenerRobots()).toContain('Ultron');
    });
});

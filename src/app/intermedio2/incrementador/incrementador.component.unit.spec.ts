import { IncrementadorComponent } from './incrementador.component';

describe('12 - Incrementador component unit tests', () => {

    let component: IncrementadorComponent;

    beforeEach(() => component = new IncrementadorComponent());

    it('Shoud the progress not greater than10', () => {

        component.progreso = 50;
        component.cambiarValor(5);
        expect(component.progreso).toBe(55);
    });
});


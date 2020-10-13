
import { MedicoComponent } from 'src/app/intermedio2/medico/medico.component';
import { RUTAS } from './app.routes';

describe('13 - Rutas/Paths principales', () => {

    it('Should exist path /medico:id', () => {


        expect(RUTAS).toContain({
            path: 'medico/:id',
            component: MedicoComponent
        });
    });
});

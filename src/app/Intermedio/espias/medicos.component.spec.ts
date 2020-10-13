// import { Observable } from 'rxjs/Observable';
import { from, empty, throwError } from 'rxjs';

import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';


describe('8 - MedicosComponent Tests', () => {

    let component: MedicosComponent;
    const service = new MedicosService(null);

    beforeEach(() => {
        component = new MedicosComponent(service);
    });


    it('Shoud ngOnInit load Medicos', () => {

        const medicos = ['medico1', 'medico2', 'medico3'];

        spyOn(service, 'getMedicos').and.callFake(() => {
            return from([medicos]);
        });

        // At the moment call ngOnInit explicity
        component.ngOnInit();
        expect(component.medicos.length).toBeGreaterThan(0);

    });

    it('should call service to add a new medico', () => {

        const spy = spyOn(service, 'agregarMedico').and.callFake(m => {
            return empty();
        });

        component.agregarMedico();

        expect(spy).toHaveBeenCalled();
    });


    it('should add a new medico to medicos array', () => {

        const medico = { id: 1, nombre: 'Juanlu' };

        spyOn(service, 'agregarMedico').and.returnValue(from([medico]));

        component.agregarMedico();

        // expect( component.medicos.length ).toBe(1);
        expect(component.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);

    });


    it('should messageError equals to service error. In case of add a new medico', () => {
        const spectedError = 'Medico cannot be added';

        spyOn(service, 'agregarMedico').and
            .returnValue(throwError(spectedError));

        component.agregarMedico();

        expect(component.mensajeError).toBe(spectedError);
    });


    it('should call service to delete one medico', () => {

        spyOn(window, 'confirm').and.returnValue(true);

        const spy = spyOn(service, 'borrarMedico').and.returnValue(empty());

        component.borrarMedico('1');

        expect(spy).toHaveBeenCalledWith('1');
    });


    it('should not call service to delete one medico', () => {

        spyOn(window, 'confirm').and.returnValue(false);

        const spy = spyOn(service, 'borrarMedico').and.returnValue(empty());

        component.borrarMedico('1');

        expect(spy).not.toHaveBeenCalledWith('1');
    });

});

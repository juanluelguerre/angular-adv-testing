import { FormRegister } from "./form";
import { FormBuilder } from '@angular/forms';

describe('7 - Forms tests', () => {

    let component: FormRegister;

    beforeEach(() => {
        component = new FormRegister( new FormBuilder() );
    });

    it('Should create a new form with 2 fields: email adnd password', () => {
        expect( component.form.contains('email') ).toBeTruthy();
        expect( component.form.contains('password') ).toBeTruthy();
    });
});

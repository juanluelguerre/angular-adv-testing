
import { HttpClientModule } from '@angular/common/http';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';

describe('9 - Medico component Tests', () => {

    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach(() => {

        // Integration tests
        TestBed.configureTestingModule({
            declarations: [MedicoComponent],
            providers: [ MedicoService ],
            imports:[ HttpClientModule ]
        });

        fixture = TestBed.createComponent(MedicoComponent);
        component = fixture.componentInstance;
    });

    it('Should be create a new medico component', () => {
        expect( component ).toBeTruthy();
    });


    it('Should be return the name', () => {

        const nombre = 'juanlu';
        const res = component.saludarMedico( nombre );

        expect( res ).toContain( nombre );
    });

});

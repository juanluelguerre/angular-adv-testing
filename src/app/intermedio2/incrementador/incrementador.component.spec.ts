import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';

import { By } from '@angular/platform-browser';

describe('11 - Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [IncrementadorComponent],
            imports: [FormsModule]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Should show leyend/leyenda', () => {

        component.leyenda = 'Loading progress';

        // Angular shoud launch change detection to update 'leyend' everywhere
        fixture.detectChanges();

        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

        expect(elem.innerHTML).toContain('Loading progress');
    });

    it('should show progress bar inside de input', () => {

        // Default value for component = 50.

        component.cambiarValor(5);
        fixture.detectChanges();

        // Once detection changes has completed and it's ready
        fixture.whenStable().then(() => {
            const input = fixture.debugElement.query(By.css('input'));
            const element = input.nativeElement;

            // console.log(element.value);

            expect(element.value).toBe('55');

        });

    });

    it('should increment/decrement once button has received one click', () => {

        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));

        // Default value for component = 50.

        // The first button substract (-5)
        botones[0].triggerEventHandler('click', null);
        expect(component.progreso).toBe(45);

        // The first button substract (+5)
        botones[1].triggerEventHandler('click', null);
        expect(component.progreso).toBe(50);
    });

    it('Should show progress inside the title', () => {

        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        botones[0].triggerEventHandler('click', null);

        fixture.detectChanges();

        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

        expect(elem.innerHTML).toContain('45');

    });

});

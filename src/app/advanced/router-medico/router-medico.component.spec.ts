import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { empty, Observable, Subject } from 'rxjs';
import { RouterMedicoComponent } from './router-medico.component';

class FakeRouter {
  navigate(params) { /* Nothind to do */ }
}

class FakeActivatedRoute {
  // For tests 14 !!!
  // params: Observable<any> = empty();

  private subject = new Subject();

  push(value) {
    this.subject.next(value);
  }

  get params() {
    // return a new Observable
    return this.subject.asObservable();
  }

}

describe('15 - RouterMedicoComponent tests', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [
        // Router,
        { provide: Router, useClass: FakeRouter },
        // ActivatedRoute
        { provide: ActivatedRoute, useClass: FakeActivatedRoute }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Should redirect to Medico page after save', () => {

    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    component.guardarMedico();

    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });


  it('Should place id === nuevo', () => {
    component = fixture.componentInstance;

    const activatedRoute: FakeActivatedRoute = TestBed.get(ActivatedRoute);

    activatedRoute.push({ id: 'nuevo' });

    expect(component.id).toBe('nuevo');
  });

});

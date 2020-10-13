import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalComponent } from './hospital.component';

describe('10 - HospitalComponent', () => {
  let component: HospitalComponent;
  let fixture: ComponentFixture<HospitalComponent>;

  //
  // LEARN: We don't need it. Webpack works for us. Move 'configureTestingModule' second beforeEach.
  //
  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ HospitalComponent ]
  //   })
  //   .compileComponents();
  // }));

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ HospitalComponent ]
    });


    fixture = TestBed.createComponent(HospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a new hospital component', () => {
    expect(component).toBeTruthy();
  });
});

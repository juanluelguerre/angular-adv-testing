import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('14 - AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        //NavbarComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      // LEARN: Ignore directives unknown
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'adv-tests'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('adv-tests');
  });

  it('should exist the router-outlet', () => {

    const fixture = TestBed.createComponent(AppComponent);

    const element = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(element).not.toBeNull();

  });

});

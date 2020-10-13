import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [ RouterTestingModule ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Shuld exist one link to Medico page', () => {

    const elements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    // console.log(elements);
    let exists = false;
    elements.forEach(element => {
      if (element.attributes['routerLink'] === '/medicos') {
        exists = true;
        //break;
      }
    });

    expect(exists).toBeTruthy();

  });

});

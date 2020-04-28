import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { Router, RouterEvent } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ReplaySubject } from 'rxjs';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  const eventSubject = new ReplaySubject<RouterEvent>(1)
  const routerSpy = {
    navigate: jasmine.createSpy('navigate'),
    events: eventSubject
  }


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('( toggle Menu )', () => {
    const beforeToggle = component.isMenuOpen;
    component.toggleMenu();
    fixture.detectChanges();
    expect(component.isMenuOpen).toBe(!beforeToggle);
  });

  it('( router test )', () => {
    component.onClickMenuItem(component.menuList[0]);
    fixture.detectChanges();

    expect(routerSpy.navigate).toHaveBeenCalledWith(['']);
  })


});

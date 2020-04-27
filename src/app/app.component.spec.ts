import { TestBed, async, fakeAsync, tick, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { element } from 'protractor';
import { MyService } from './Service/my-service.service';
import { ValueService } from './Service/value-service.service';
import { cold } from 'jasmine-marbles'
import { map } from 'rxjs/operators'
import { zip } from 'rxjs';
import { MenuComponent } from './Component/menu/menu.component';


describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MenuComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('function onMenuStatusChange', () => {
    const menuStatusChangeTo: boolean = false;
    component.onMenuStatusChange(menuStatusChangeTo)
    fixture.detectChanges();
    expect(component.isMenuOpen).toBe(menuStatusChangeTo);
  });


});



import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { By } from '@angular/platform-browser';
import { cold } from 'jasmine-marbles';
import { map } from 'rxjs/operators';
import { zip } from 'rxjs';


describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  

  it(' ( check html comtent ) should render title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toBe('Welcome to Neux');
  });

  it('( Component function trigger )', () => {

    expect(component.isLightOn).toBe(true);
    component.clickBtn();
    expect(component.isLightOn).toBe(false);
  });

  it('( disabled Button test )', () => {
    const component = fixture.componentInstance;
    const switchBtn = fixture.nativeElement.querySelector('#switch_btn');
    const beforeClick_isLightOn = component.isLightOn;
    switchBtn.disabled = true;
    fixture.detectChanges();
    switchBtn.click();
    expect(component.isLightOn).toBe(beforeClick_isLightOn);
  });

  it('( FakeAsync and tick )', fakeAsync(() => {
    let called = false;
    let startDate = Date.now();
    let endDate;

    setTimeout(() => {
      called = true;
      endDate = Date.now();
    }, 1000);

    tick(1000);
    expect(called).toBe(true);
    expect(endDate - startDate).toBe(1000);
  }));

  it('( Marble test )', () => {

    const source$ = cold('-a-b-c-|', { a: 1, b: 2, c: 3 });
    const expected$ = cold('-x-y-z-|', { x: 2, y: 4, z: 6 });

    const result = source$.pipe(map(x => x * 2));

    expect(result).toBeObservable(expected$);


  });

  it('( Marble test ) - zip', () => {

    const name$ = cold('-a-b-c-|', { a: 'John', b: 'Mary', c: 'Harry' });
    const age$ = cold('-x-y-z-|', { x: 20, y: 35, z: 6 });
    const expected$ = cold('-A-B-C-|', {
      A: { name: 'John', age: 20 },
      B: { name: 'Mary', age: 35 },
      C: { name: 'Harry', age: 6 },
    });

    const result = zip(name$, age$)
      .pipe(
        map(([nameRes, ageRes]) => ({ name: nameRes, age: ageRes }))
      );

    expect(result).toBeObservable(expected$);

  });
});

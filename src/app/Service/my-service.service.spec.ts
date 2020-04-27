import { TestBed } from '@angular/core/testing';

import { MyService } from './my-service.service';
import { ValueService } from './value-service.service';

describe('MyService', () => {
  let service: MyService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [MyService] });
    service = TestBed.get(MyService);
  });

  beforeEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('( Check Service Value - sync )\texpect = "sync value"', () => {
    const value = service.getValue();
    expect(value).toBe('sync value');
  });

  it('( Check get Service Value - observable )\texpect = "observable value"', (done: DoneFn) => {
    service.getObservableValue().subscribe((value: string) => {
      expect(value).toBe('observable value');
      done();
    });
  });

  it('( Check get Service Value - promise )\texpect = "promise value"', async () => {
    const promiseValue = await service.getPromiseValue();
    expect(promiseValue).toBe('promise value');
  });

  it('( Check get Inject Service Value - new ValueService )\texpect = "value from valueService"', () => {
    const valueByDelegate = service.getValueByDelegate();
    expect(valueByDelegate).toBe('value from valueService');
  });

  it('( Check get Inject Service Value - fake Object )\texpect = "value from valueService"', () => {
    const fake = { getValue: () => 'fake value' };
    const myService = new MyService(fake as ValueService);
    const valueByDelegate = myService.getValueByDelegate();
    expect(valueByDelegate).toBe('fake value');
  });

  it('#getValue should return stubbed value from a spy', () => {
    // create `getValue` spy on an object representing the ValueService
    const valueServiceSpy =
      jasmine.createSpyObj('ValueService', ['getValue']);

    // set the value to return when the `getValue` spy is called.
    const stubValue = 'stub value';
    valueServiceSpy.getValue.and.returnValue(stubValue);

    const myService = new MyService(valueServiceSpy);

    expect(myService.getValueByDelegate())
      .toBe(stubValue, 'service returned stub value');

    expect(valueServiceSpy.getValue.calls.count())
      .toBe(1, 'spy method was called once');

    expect(valueServiceSpy.getValue.calls.mostRecent().returnValue)
      .toBe(stubValue);
  });

});

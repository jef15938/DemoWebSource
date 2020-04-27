import { TestBed } from '@angular/core/testing';

import { ValueService } from './value-service.service';

describe('ValueServic', () => {
  let valueService: ValueService ;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    valueService = TestBed.get(ValueService);
  });

  it('should be created', () => {
    expect(valueService).toBeTruthy();
  });
});

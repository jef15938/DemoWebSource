import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  constructor() { }

  public getValue(): string {
    return 'value from valueService';
  }
}

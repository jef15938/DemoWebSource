import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { ValueService } from './value-service.service';

@Injectable({
  providedIn: 'root'
})
export class MyService {


  //委託 valueService
  constructor(
    private valueService: ValueService
  ) {

  }

  public getValueByDelegate(): string {
    return this.valueService.getValue();
  }
  //end of 委託 valueService

  public getAppName(): string {
    return 'Neux';
  }

  public getValue(): string {
    return 'sync value';
  }

  public getPromiseValue(): Promise<string> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res('promise value');
      }, 5000)
    })
  }

  public getObservableValue(): Observable<string> {
    return Observable.create((observer: Observer<string>) => {
      observer.next('observable value');
      observer.complete();

    });
  }
}

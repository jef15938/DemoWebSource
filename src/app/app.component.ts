import { Component, OnInit } from '@angular/core';
import { MyService } from './Service/my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  
  public title: string;
  public isMenuOpen: boolean = true;
  constructor() {

  }

  onMenuStatusChange(isMenuOpen) {
    console.log("onMenuStatusChange isMenuOpen: ",isMenuOpen);
    this.isMenuOpen = isMenuOpen;
  }
}

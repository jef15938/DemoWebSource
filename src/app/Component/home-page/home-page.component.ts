import { Component, OnInit } from '@angular/core';
import { MyService } from 'src/app/Service/my-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public title: string;
  constructor(
    private myService: MyService
  ) {

  }

  ngOnInit(): void {
    this.title = this.myService.getAppName();
  }
  
  public isLightOn: boolean = true;
  public clickBtn() {
    this.isLightOn = !this.isLightOn;
  }

}

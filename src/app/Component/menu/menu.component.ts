import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from '../../Bean/MenuItem';
import { Router, NavigationEnd } from '@angular/router';
import { version } from '../../../../package.json';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public isMenuOpen: boolean = true;
  public appVersion: string = ''
  public clickItem: MenuItem;
  public menuList: Array<MenuItem> = [];
  constructor(
    private router: Router
  ) { 
    this.appVersion = version;
  }

  ngOnInit() {
    this.menuList = this.mockMenuList();
    this.clickItem = this.menuList[0];
  }
  
  @Output() menuStatus: EventEmitter<boolean> = new EventEmitter();

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuStatus.emit(this.isMenuOpen);
  }

  onClickMenuItem(menuItem: MenuItem) {
    // console.warn(menuItem);
    this.clickItem = menuItem;
    this.router.navigate([menuItem.url]);
  }

  private mockMenuList(): Array<MenuItem> {

    return [
      new MenuItem('homePage', '')
    ];
  }

}

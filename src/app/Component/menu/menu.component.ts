import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from '../../Bean/MenuItem';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public isMenuOpen: boolean = true;
  public clickItem: MenuItem;
  public menuList: Array<MenuItem> = [];
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.menuList = this.mockMenuList();
    this.clickItem = this.menuList[0];
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        let filterMenuList = this.menuList.filter(x => x.url == val.url);
        this.clickItem = filterMenuList.length > 0 ? filterMenuList[0] : this.menuList[0];
      }
    })
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

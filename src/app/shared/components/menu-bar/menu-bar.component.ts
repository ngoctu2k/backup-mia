import { Component, OnInit, DoCheck } from '@angular/core';

import { menuItem } from './menu-item';
import { MatMenuItem } from '@angular/material/menu';

interface MenuItem {

  title: string;
  elementOnUrl: string;
  class: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit, DoCheck {

  constructor() {
    this.menuItem = menuItem;
  }

  splitedUrl: Array<string>;
  menuItem: MenuItem[];


  ngDoCheck() {
    this.splitedUrl = window.location.href.split('/');
  }

  ngOnInit(): void {
    this.splitedUrl = window.location.href.split('/');
  }

}

import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-pages',
  styleUrls: ['pages.component.scss'],
  templateUrl: './pages.component.html',
})
export class PagesComponent {
  @ViewChild('sidenav') public sidenav: MatSidenav;
  clickedSearchVal = false;
  // @Output() public sidenavToggle = new EventEmitter();
  autoGrowTextZone(e) {
    e.target.style.height = '0px';
    e.target.style.height = e.target.scrollHeight + 'px';
  }

  closeSideNav(type?) {
    // console.log(this.sidenav.close())
    if (type === 'close') {
      this.sidenav.toggle();
    }
    if (type === 'open') {
    }
  }
}

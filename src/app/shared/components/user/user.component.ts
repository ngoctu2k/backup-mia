import { Component, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { EventEmitter } from '@angular/core';

export interface Vegetable {
  name: string;
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One'];
  filteredOptions: Observable<string[]>;
  isClickSearch = false;
  searchText = '';
  vegetables: Vegetable[] = [
    { name: 'Vải Thiều Thanh Hà' },
    { name: 'Táo Mèo' },
    { name: 'Mận Hậu' },

  ];
  list = [
    {
      name: "Xoài Tứ Qúy",
      image: "assets/images/slider1.png"
    },
    {
      name: "Đào Tiên Tửu",
      image: "assets/images/slider2.png"
    },
    {
      name: "Thanh Long",
      image: "assets/images/slider3.png"
    },
    {
      name: "Bưởi Phú Diễn",
      image: "assets/images/slider4.png"
    },
    {
      name: "Mít Mê Linh",
      image: "assets/images/slider1.png"
    },

  ]
  region = [
    {
      name: "Hà Giang"
    },
    {
      name: "Bắc Giang"

    },
    {
      name: "Hà Nội"

    },
    {
      name: "Lào Cai"

    },


  ]
  @Output() clickedSearch = new EventEmitter();
  constructor(
    private router: Router
  ) { }

  user: any = {};

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('access_user'));
  }

  logout() {
    confirm('Bạn có thực sự muốn đăng xuất không?') === true && this.router.navigateByUrl('/login');
  }

  clearVal() {
    this.searchText = '';
  }

  expanSearchBar(ev) {
    this.isClickSearch = ev;
    this.clickedSearch.emit(this.isClickSearch);
  }
  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  }


}


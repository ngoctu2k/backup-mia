import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.scss']
})
export class SearchDetailComponent implements OnInit {
  images = [{
    id : 1,
    path: "assets/images/slider1.png"
  },
  {
    id : 2,
    path: "assets/images/slider2.png"
  },
  {
    id : 3,
    path: "assets/images/slider3.png"
  },
  {
    id : 4,
    path: "assets/images/slider4.png"
  },
  {
    id : 5,
    path: "assets/images/slider3.png"
  },
  {
    id : 6,
    path: "assets/images/slider3.png"
  },
  {
    id : 7,
    path: "assets/images/slider3.png"
  },
  ];
  val:any = {
    name :"Thanh long ruột đỏ",
    title : "Xoài Tứ Quý",
    code: "25896866",
  }
  province = [
  {
    id : 1,
    name : "Hà Giang"
  },
  {
    id: 2,
    name: "Cao Bằng"
  },
  {
    id: 3,
    name:"Thái Bình"
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}

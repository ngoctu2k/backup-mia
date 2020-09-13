import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}

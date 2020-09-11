import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruit-relation',
  templateUrl: './fruit-relation.component.html',
  styleUrls: ['./fruit-relation.component.scss']
})
export class FruitRelationComponent implements OnInit {
  list = [
    {
      id : 1,
      title: "Xoài tứ quý",
      code: "25896866",
      img: "assets/images/engin-akyurt-4yTKah43Y2o-unsplash.png"
    },
    {
      id : 2,
      title: "Thanh Long Ruột Đỏ",
      code: "54956465",
      img: "assets/images/slider2.png"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

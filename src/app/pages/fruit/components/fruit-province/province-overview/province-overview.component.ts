import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-province-overview',
  templateUrl: './province-overview.component.html',
  styleUrls: ['./province-overview.component.scss']
})
export class ProvinceOverviewComponent implements OnInit {
  @Input() id: string;
  @Input() maxSize: number;
  @Output() pageChange: EventEmitter<number>;
  @Output() pageBoundsCorrection: EventEmitter<number>;

  // Is show fruit details
  @Input() isDetail: boolean;
  @Output() showFruitDetail = new EventEmitter<boolean>();
  @Input() selectedIndex = 2;
  public regionConf: PaginationInstance = {
    id: 'region',
    itemsPerPage: 5,
    currentPage: 1
  };
  public fruitConf: PaginationInstance = {
    id: 'fruit',
    itemsPerPage: 5,
    currentPage: 1
  };
  list = [
    1, 2, 3, 4, 5, 6,
  ];
  numberArr = [
    1, 2, 3, 4, 5, 6,
  ];
  lists = [
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
  constructor() { }

  ngOnInit(): void {
  }

  handleDetailFruit() {
    this.isDetail = true;
    this.selectedIndex = 2;
    this.showFruitDetail.emit(this.isDetail);
  }
}

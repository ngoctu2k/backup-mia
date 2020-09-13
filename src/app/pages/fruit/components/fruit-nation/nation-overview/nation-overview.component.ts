import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { _countGroupLabelsBeforeOption } from '@angular/material/core';
import { PaginationInstance } from 'ngx-pagination';
import { RegionService } from '../../../services/region.service';

@Component({
  selector: 'app-nation-overview',
  templateUrl: './nation-overview.component.html',
  styleUrls: ['./nation-overview.component.scss']
})
export class NationOverviewComponent implements OnInit {
  // Pagination
  @Input() id: string;
  @Input() maxSize: number;
  @Output() pageChange: EventEmitter<number>;
  @Output() pageBoundsCorrection: EventEmitter<number>;
  // Is show/hide fruit details
  @Input() isDetail: boolean;
  @Output() showFruitDetail = new EventEmitter<boolean>();
  @Input() selectedIndex: number;
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
  numberArr = [
    1, 2, 3, 4, 5, 6,
  ];
  list_region;



  constructor(private regionService: RegionService) { }

  ngOnInit(): void {
    this.regionService.list().subscribe(res => {
      this.list_region = res;
      console.log(res);

    })

  }
  handleDetailFruit() {
    this.isDetail = true;
    this.selectedIndex = 2;
    this.showFruitDetail.emit(this.isDetail);
  }

}

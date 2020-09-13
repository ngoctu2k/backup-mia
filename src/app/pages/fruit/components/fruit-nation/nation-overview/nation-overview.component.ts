import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { _countGroupLabelsBeforeOption } from '@angular/material/core';
import { PaginationInstance } from 'ngx-pagination';
import { from } from 'rxjs';
import { RegionService } from '../../../services/region.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Region} from '../../../../../shared/region.data';


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
  Region = Region;
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
  idRegion;

  constructor(private regionService: RegionService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.regionService.list().subscribe(res => {
      this.list_region = res;
      console.log(res);
    })
  }
  getId(val){
    this.idRegion=val;
    let region = this.Region.find(a => a.id === val);
    this.router.navigate(['pages/fruit', region.slug])
  }
  handleDetailFruit() {
    this.isDetail = true;
    this.selectedIndex = 2;
    this.showFruitDetail.emit(this.isDetail);
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { SharedDataService } from 'src/app/shared/services/shared-data.service';
import { FruitService } from '../../../services/fruit.service';
import { ProvinceService } from '../../../services/province.service';

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
  detailFruit;
  lists;
  listProvince;
  constructor(
    private fruitService: FruitService,
    private provinceServce: ProvinceService,
    private shareService: SharedDataService
    ) { }

  ngOnInit(): void {
    this.fruitService.getDetailFruit().subscribe(res =>{
      this.lists = res;
      console.log(this.lists);
    })
    this.provinceServce.getProvince().subscribe(res=>{
      this.listProvince = res;
      console.log(this.listProvince);
      console.log("listProvince");
    })
  }
  getFruit(item){
    this.detailFruit=item;
    this.shareService.setDetail(item);
    console.log(this.detailFruit);
  }
  handleDetailFruit() {
    this.isDetail = true;
    this.selectedIndex = 2;
    this.showFruitDetail.emit(this.isDetail);
  }
}

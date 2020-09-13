import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { SharedDataService } from 'src/app/shared/services/shared-data.service';
import{ProvinceService} from '../../../services/province.service';

@Component({
  selector: 'app-region-overview',
  templateUrl: './region-overview.component.html',
  styleUrls: ['./region-overview.component.scss']
})
export class RegionOverviewComponent implements OnInit {
  @Input() id: string;
  @Input() maxSize: number;
  @Output() pageChange: EventEmitter<number>;
  @Output() pageBoundsCorrection: EventEmitter<number>;

  // Is show fruit details
  @Input() isDetail: boolean;
  @Output() showFruitDetail = new EventEmitter<boolean>();
  @Input() selectedIndex: number;
  listProvince;
  idProvince;
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
  numberArr = [
    1, 2, 3, 4, 5, 6,
  ];
 
  constructor(private provinceService :ProvinceService,
    private shareService: SharedDataService) { }

  ngOnInit(): void {
    this.provinceService.getProvince().subscribe(
      res => {
        this.listProvince = res;
        console.log(this.listProvince);
        
      }
    )
  }


  handleDetailFruit() {
    this.isDetail = true;
    this.selectedIndex = 2;
    this.showFruitDetail.emit(this.isDetail);
  }
  getId(province){
    this.idProvince = province.ProvinceId; 
    this.shareService.setProvinceId(province.ProvinceId);
  }
}

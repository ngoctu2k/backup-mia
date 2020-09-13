import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  detailFruit;
  listFruit;
  listProvince;
  idProvince;
  constructor(
    private fruitService: FruitService,
    private provinceServce: ProvinceService,
    private shareService: SharedDataService,
    private activeRoute: ActivatedRoute,
        ) { }


  ngOnInit(): void {
    this.provinceServce.getProvince().subscribe(res=>{
      this.listProvince = res;
      console.log(this.listProvince);
      console.log("listProvince");
    })
    this.activeRoute.paramMap.subscribe((params) => {
      this.idProvince = params.get('province')
      console.log(this.idProvince);
    });
    this.fruitService.getDetailFruit(this.idProvince).subscribe(res =>{
      this.listFruit = res;
      console.log(this.listFruit);
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
  handleCarouselEvents(ev){
    console.log(ev);
  }

}

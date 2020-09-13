import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import{ProvinceService} from '../../../services/province.service';
import {Region} from '../../../../../shared/region.data';
import { Router, ActivatedRoute } from '@angular/router';
//tu
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import{RegionDialogComponent} from '../region-map/dialog/region-dialog/region-dialog.component'

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
  Province; // Tỉnh
  regionLink; // Slug
  Region = Region; //Region global
arrImages=[
  "assets/images/slider1.png",
  "assets/images/slider1.png",
  "assets/images/slider1.png",
  "assets/images/slider1.png",

]
  constructor(private provinceService :ProvinceService,
    private router:Router,
    private route: ActivatedRoute,
    // tu
    public dialog: MatDialog
    ) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.regionLink = paramMap.get('regions');
    });
    this.Province = this.Region.find(a=>{
       return a.slug === this.regionLink;
    })
    console.log(this.Province);
    this.provinceService.getProvince(this.Province.id).subscribe(
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
  // tu
  openDialog(){
    
    this.dialog.open(RegionDialogComponent)
  }
}

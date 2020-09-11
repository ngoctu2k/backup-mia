import { Component, OnInit } from '@angular/core';
import { SharedDataService } from "../../../../shared/services/shared-data.service";

@Component({
  selector: 'app-fruit-region',
  templateUrl: './fruit-region.component.html',
  styleUrls: ['./fruit-region.component.scss']
})
export class FruitRegionComponent implements OnInit {
  isDetail = false;
  selectedIndex = 0;
  constructor(private sharedService: SharedDataService) { }

  ngOnInit(): void {
    this.sharedService.sharedDetail.subscribe(val => {
      this.isDetail = val.isDetail;
      this.selectedIndex = val.selectedIndex;
    });
    if (this.isDetail === false) {
      this.selectedIndex = 0;
    }
  }
  handleDetailFruit(ev) {
    console.log(ev);
    this.isDetail = ev;
  }
}

import { Component, OnInit } from '@angular/core';
import { SharedDataService } from "../../../../shared/services/shared-data.service";

@Component({
  selector: 'app-fruit-nation',
  templateUrl: './fruit-nation.component.html',
  styleUrls: ['./fruit-nation.component.scss']
})
export class FruitNationComponent implements OnInit {
  isDetail = false;
  selectedIndex = 0;

  constructor(private sharedService: SharedDataService) { }

  ngOnInit(): void {
    if (this.isDetail === false) {
      this.selectedIndex = 0;
    }
    this.sharedService.sharedDetail.subscribe(val => {
      this.isDetail = val.isDetail;
      this.selectedIndex = val.selectedIndex;
    })
  }
  handleDetailFruit(ev) {
    console.log(ev);
    this.isDetail = ev;
  }
}

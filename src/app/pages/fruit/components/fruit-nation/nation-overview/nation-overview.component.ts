import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';

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
    1, 2, 3, 4, 5, 6,
  ];
  numberArr = [
    1, 2, 3, 4, 5, 6,
  ];
  constructor() { }

  ngOnInit(): void {


  }
  handleDetailFruit() {
    this.isDetail = true;
    this.selectedIndex = 2;
    this.showFruitDetail.emit(this.isDetail);
  }
}

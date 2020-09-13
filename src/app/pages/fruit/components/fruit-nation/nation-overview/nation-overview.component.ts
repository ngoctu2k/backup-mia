import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { _countGroupLabelsBeforeOption } from '@angular/material/core';
import { PaginationInstance } from 'ngx-pagination';
import { from } from 'rxjs';
import { RegionService } from '../../../services/region.service';
import { Router, ActivatedRoute } from '@angular/router';


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
  Region = [
    {id: 1, name: "Việt Nam", slug:"viet-nam"},
    {id: 2, name: "Đông Bắc Bộ", slug:"dong-bac-bo"},
    {id: 3, name: "Tây Bắc", slug: 'tay-bac'},
    {id: 4, name: "Đông bằng sông Hồng", slug:'dong-bang-song-hong'},
    {id: 5, name: "Bắc Trung Bộ", slug:'bac-trung-bo'},
    {id: 6, name: "Nam Trung Bộ", slug:'nam-trung-bo'},
    {id: 7, name: "Tây Nguyên", slug:'tay-nguyen'},
    {id: 8, name: "Đông Nam Bộ", slug:'dong-nam-bo'},
    {id: 9, name: "Đồng bằng sông Cửu Long", slug:'dong-bang-song-cuu-long'}
]
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
  list_region;

  constructor(private regionService: RegionService,
    private router:Router) { }

  ngOnInit(): void {
    this.regionService.list().subscribe(res => {
      this.list_region = res;
      console.log(res);
    })
  }
  getId(val){
    let region = this.Region.find(a => a.id === val);
    this.router.navigate(['pages/fruit', region.slug])
  }
  handleDetailFruit() {
    this.isDetail = true;
    this.selectedIndex = 2;
    this.showFruitDetail.emit(this.isDetail);
  }
}

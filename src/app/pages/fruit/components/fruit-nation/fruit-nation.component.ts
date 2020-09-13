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

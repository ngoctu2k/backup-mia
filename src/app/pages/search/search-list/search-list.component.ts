import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  numberArr = [
    1, 2, 3, 4,
  ];
  list = [
    1,
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

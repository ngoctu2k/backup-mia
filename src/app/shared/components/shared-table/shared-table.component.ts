import { Component, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.scss'],
})

export class SharedTableComponent implements OnInit {

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @Input('displayedColumns') displayedColumns: any;
  @Input('backendDisplayColumns') backendDisplayColumns: any;
  @Input('displayedData') displayedData: any;
  @Input('route') route: any;
  @Input('tab') tab: any;
  @Input('windowForm') windowForm: any;
  @Input('routeIndex') routeIndex: any;
  constructor(
    private router: Router
  ) { }

  dataSource: any;
  resultsLength = 0;
  isOpenDialog: boolean;

  ngOnInit(): void {
    // if (this.route !== undefined) {
    //   this.isDialog = false;
    // } else {
    //   this.isDialog = true;
    // }
  }

  ngOnChanges() {
    this.changeSourceData();
  }

  changeSourceData() {
    if (this.displayedData !== undefined) {
      this.displayedData.map((data: any) => {
        for (var index in this.displayedColumns) {
          let key = this.displayedColumns[index];
          let value = this.backendDisplayColumns[index];
          data[key] = data[value];
        }
      });
      this.dataSource = new MatTableDataSource(JSON.parse(JSON.stringify(this.displayedData)));
      this.resultsLength = this.dataSource.total_count;
      this.dataSource.paginator = this.paginator;
    }
  }

  navigation(elementId: number) {
    if (this.route !== undefined) {
      this.router.navigate([`${this.route}/${elementId}`], { queryParams: { tab: this.tab } });
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

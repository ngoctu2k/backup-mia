import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../../../../shared/services/shared-data.service';

@Component({
  selector: 'app-fruit-information',
  templateUrl: './fruit-information.component.html',
  styleUrls: ['./fruit-information.component.scss']
})
export class FruitInformationComponent implements OnInit {
  images = [{
    path: 'assets/images/slider1.png'
  },
  {
    path: 'assets/images/slider2.png'
  },
  {
    path: 'assets/images/slider3.png'
  },
  {
    path: 'assets/images/slider4.png'
  },
  {
    path: 'assets/images/slider1.png'
  },
  {
    path: 'assets/images/slider2.png'
  },
  {
    path: 'assets/images/slider3.png'
  },
  ];
  isDetail: any;
  val: any = {
    title: 'Xoài Tứ Quý',
    code: '25896866',
  };
  constructor(private sharedService: SharedDataService) { }

  ngOnInit(): void {
    this.sharedService.sharedDetail.subscribe(val => this.isDetail = val.isDetail);
  }

  handle() {
    const a: any = {
      isDetail: this.isDetail,
      selectedIndex: 2
    };
    this.sharedService.nextMessage(a);
    if (a.isDetail === false) {
      a.selectedIndex = 0;
    }
  }
}

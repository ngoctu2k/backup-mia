import { Component, OnInit, OnDestroy } from '@angular/core';
import { select } from 'd3';
import { DrawMapService } from 'src/app/shared/services/draw-map.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedDataService } from 'src/app/shared/services/shared-data.service';
import { FruitService } from '../../../services/fruit.service';

@Component({
  selector: 'app-province-map',
  templateUrl: './province-map.component.html',
  styleUrls: ['./province-map.component.scss']
})
export class ProvinceMapComponent implements OnInit, OnDestroy {
  provinceId: string;
  provinceName: string;
  provinceLink: string;
  fruitDetail;
  list;
  constructor(
    private drawMap: DrawMapService,
    private router: Router,
    private sharedData: SharedDataService,
    private fruitService: FruitService,
    private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.provinceLink = paramMap.get('province');
    });
    this.sharedData.shareFruitDetail.subscribe(val=>{
      this.fruitDetail = val;
      console.log(this.fruitDetail);
    })

    console.log(this.provinceLink);
    const re = /\-/gi;
    const newProvinceLink = this.provinceLink.replace(re, '_');
    this.drawMap.drawProvince(
      select('svg'),
      `https://raw.githubusercontent.com/vdporiginals/vietnam_geo/master/province/${newProvinceLink}.geojson`
    );
  }

  ngOnDestroy(): void {
    select('svg').remove();
  }
}

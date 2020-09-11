import { Component, OnInit, OnDestroy } from '@angular/core';
import { select } from 'd3';
import { DrawMapService } from 'src/app/shared/services/draw-map.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedDataService } from 'src/app/shared/services/shared-data.service';

@Component({
  selector: 'app-province-map',
  templateUrl: './province-map.component.html',
  styleUrls: ['./province-map.component.scss']
})
export class ProvinceMapComponent implements OnInit, OnDestroy {
  provinceId: string;
  provinceName: string;
  provinceLink: string;
  constructor(
    private drawMap: DrawMapService,
    private router: Router,
    private sharedData: SharedDataService,
    private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.provinceLink = paramMap.get('province');
    });
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

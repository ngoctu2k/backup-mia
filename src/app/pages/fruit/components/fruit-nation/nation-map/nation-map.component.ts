import { Component, OnInit, OnChanges, ViewEncapsulation, OnDestroy, AfterContentInit } from '@angular/core';
import { DrawMapService } from 'src/app/shared/services/draw-map.service';
import { select } from 'd3';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedDataService } from 'src/app/shared/services/shared-data.service';

@Component({
  selector: 'app-nation-map',
  templateUrl: './nation-map.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./nation-map.component.scss']
})
export class NationMapComponent implements OnInit, OnDestroy, AfterContentInit {
  jsonLink;
  constructor(
    private drawMap: DrawMapService,
    private router: Router,
    private sharedData: SharedDataService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.sharedData.setDataParams(paramMap);
    });
    // const test = from();
    // test.subscribe();
  }
  ngAfterContentInit() {
    this.drawMap.drawNation(select('svg'), 'https://raw.githubusercontent.com/vdporiginals/vietnam_geo/master/vietnam.geojson', this.router);
  }

  ngOnDestroy(): void {
    select('svg').remove();
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { select } from 'd3';
import { DrawMapService } from 'src/app/shared/services/draw-map.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedDataService } from 'src/app/shared/services/shared-data.service';


@Component({
  selector: 'app-region-map',
  templateUrl: './region-map.component.html',
  styleUrls: ['./region-map.component.scss']
})
export class RegionMapComponent implements OnInit, OnDestroy {
  regionId: string;
  regionName: string;
  regionLink: string;
  constructor(
    private drawMap: DrawMapService,
    private sharedData: SharedDataService,
    private router: Router,
    private route: ActivatedRoute,
    
    ) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.sharedData.setDataParams(paramMap);
      this.regionName = paramMap.get('regions');
      switch (this.regionName) {
        case 'dong-bang-song-cuu-long':
          this.regionId = '1';
          this.regionLink = 'https://raw.githubusercontent.com/vdporiginals/vietnam_geo/master/region/db-song-cuu-long.geojson';
          break;
        case 'dong-bang-song-hong':
          this.regionId = '2';
          this.regionLink = 'https://raw.githubusercontent.com/vdporiginals/vietnam_geo/master/region/db-song-hong.geojson';
          break;
        case 'dong-bac-bo':
          this.regionId = '3';
          this.regionLink = 'https://raw.githubusercontent.com/vdporiginals/vietnam_geo/master/region/dong-bac-bo.geojson';
          break;
        case 'dong-nam-bo':
          this.regionId = '4';
          this.regionLink = 'https://raw.githubusercontent.com/vdporiginals/vietnam_geo/master/region/dong-nam-bo.geojson';
          break;
        case 'bac-trung-bo':
          this.regionId = '5';
          this.regionLink = 'https://raw.githubusercontent.com/vdporiginals/vietnam_geo/master/region/bac-trung-bo.geojson';
          break;
        case 'nam-trung-bo':
          this.regionId = '6';
          this.regionLink = 'https://raw.githubusercontent.com/vdporiginals/vietnam_geo/master/region/nam-trung-bo.geojson';
          break;
        case 'tay-bac-bo':
          this.regionId = '7';
          this.regionLink = 'https://raw.githubusercontent.com/vdporiginals/vietnam_geo/master/region/tay-bac-bo.geojson';
          break;
        case 'tay-nguyen':
          this.regionId = '8';
          this.regionLink = 'https://raw.githubusercontent.com/vdporiginals/vietnam_geo/master/region/tay-nguyen.geojson';
          break;
        default:
          break;
      }
    });
    this.drawMap.drawRegion(select('svg'), this.regionLink, this.regionId, this.regionName, this.router);
  }

  ngOnDestroy(): void {
    select('svg').remove();
  }
  
}

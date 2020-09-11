import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FruitRoutingModule } from './fruit-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FruitComponent } from './fruit.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FruitRegionComponent } from './components/fruit-region/fruit-region.component';
import { RegionMapComponent } from './components/fruit-region/region-map/region-map.component';
import { RegionOverviewComponent } from './components/fruit-region/region-overview/region-overview.component';
import { FruitProvinceComponent } from './components/fruit-province/fruit-province.component';
import { ProvinceMapComponent } from './components/fruit-province/province-map/province-map.component';
import { ProvinceOverviewComponent } from './components/fruit-province/province-overview/province-overview.component';
import { FruitNationComponent } from './components/fruit-nation/fruit-nation.component';
import { NationMapComponent } from './components/fruit-nation/nation-map/nation-map.component';
import { NationOverviewComponent } from './components/fruit-nation/nation-overview/nation-overview.component';
import { FruitDetailComponent } from './components/fruit-detail/fruit-detail.component';
import { FruitInformationComponent } from './components/fruit-detail/fruit-information/fruit-information.component';
import { FruitRelationComponent } from './components/fruit-detail/fruit-relation/fruit-relation.component';

@NgModule({
  declarations: [
    FruitComponent,
    FruitRegionComponent,
    FruitProvinceComponent,
    RegionMapComponent,
    RegionOverviewComponent,
    ProvinceMapComponent,
    ProvinceOverviewComponent,
    FruitNationComponent,
    NationMapComponent,
    NationOverviewComponent,
    FruitDetailComponent,
    FruitInformationComponent,
    FruitRelationComponent
  ],
  imports: [
    CommonModule,
    FruitRoutingModule,
    NgxPaginationModule,
    FlexLayoutModule,
    IvyCarouselModule,
    SharedModule
  ]
})
export class FruitModule { }

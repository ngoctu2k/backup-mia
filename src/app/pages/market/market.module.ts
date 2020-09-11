import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MarketRoutingModule } from './market-routing.module';
import { MarketComponent } from './market.component';


@NgModule({
  declarations: [MarketComponent],
  imports: [
    CommonModule,
    MarketRoutingModule,
    SharedModule
  ]
})
export class MarketModule { }

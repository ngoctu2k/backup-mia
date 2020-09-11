import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { TradeRoutingModule } from './trade-routing.module';
import { TradeComponent } from './trade.component';


@NgModule({
  declarations: [TradeComponent],
  imports: [
    CommonModule,
    TradeRoutingModule,
    SharedModule
  ]
})
export class TradeModule { }

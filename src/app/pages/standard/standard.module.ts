import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { StandardRoutingModule } from './standard-routing.module';
import { StandardComponent } from './standard.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [StandardComponent],
  imports: [
    CommonModule,
    StandardRoutingModule,
    SharedModule,
    FlexLayoutModule,
  ]
})
export class StandardModule { }

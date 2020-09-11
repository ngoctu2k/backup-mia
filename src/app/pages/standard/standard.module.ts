import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { StandardRoutingModule } from './standard-routing.module';
import { StandardComponent } from './standard.component';


@NgModule({
  declarations: [StandardComponent],
  imports: [
    CommonModule,
    StandardRoutingModule,
    SharedModule
  ]
})
export class StandardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SearchRoutingModule } from './seach-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchComponent } from './search.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';

@NgModule({
    declarations: [
    SearchComponent,
    SearchListComponent,
    SearchDetailComponent],
    imports: [
        CommonModule,
        SearchRoutingModule,
        NgxPaginationModule,
        FlexLayoutModule,
        IvyCarouselModule,
        SharedModule
    ]
})
export class SearchModule { }

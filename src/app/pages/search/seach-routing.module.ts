import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';

const routes: Routes = [
    {
        path: '',
        component: SearchComponent,
        children: [
            {
                path: '',
                component: SearchListComponent,
            }, {
                path: 'detail',
                component: SearchDetailComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SearchRoutingModule { }

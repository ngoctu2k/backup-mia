import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FruitComponent } from './fruit.component';
import { FruitNationComponent } from './components/fruit-nation/fruit-nation.component';
import { FruitRegionComponent } from './components/fruit-region/fruit-region.component';
import { FruitProvinceComponent } from './components/fruit-province/fruit-province.component';

const routes: Routes = [
  {
    path: '',
    component: FruitComponent,
    children: [
      {
        path: '',
        component: FruitNationComponent,
        data: {
          breadcrumb: 'Việt Nam'
        },
      },
      {
        path: ':regions',
        component: FruitRegionComponent,
        data: {
          breadcrumb: ''
        }
      },
      {
        path: ':regions/:province',
        component: FruitProvinceComponent,
        data: {
          breadcrumb: ''
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FruitRoutingModule { }

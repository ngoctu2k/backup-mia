import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//component
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [

      {
        path: 'fruit',
        loadChildren: () => import('./fruit/fruit.module')
          .then(m => m.FruitModule)
      },
      {
        path: 'market',
        loadChildren: () => import('./market/market.module')
          .then(m => m.MarketModule)
      },
      {
        path: 'trade',
        loadChildren: () => import('./trade/trade.module')
          .then(m => m.TradeModule)
      },
      {
        path: 'standard',
        loadChildren: () => import('./standard/standard.module')
          .then(m => m.StandardModule)
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.module')
          .then(m => m.SearchModule)
      },
      {
        path: '',
        redirectTo: 'fruit',
        pathMatch: 'full',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

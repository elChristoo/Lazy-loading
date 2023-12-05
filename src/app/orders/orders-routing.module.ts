import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  {
    path: '', component: OrderListComponent, children: [
      {
        path: '',
        loadChildren: () => import('./home-component/home.module')
          .then((m) => m.HomeModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./home-component/home.module')
          .then((m) => m.HomeModule)
      },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}

import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { LoginComponentComponent } from "./login/login-component/login-component.component";
import { CustomerListComponent } from "./customers/customer-list/customer-list.component";
import { OrderListComponent } from "./orders/order-list/order-list.component";

export const routes: Routes = [
    {path:'login',component: LoginComponentComponent,
    children:[
        {path:'customers',component: CustomerListComponent },
        {path:'orders',component: OrderListComponent},
        // {path: '', pathMatch:'full' ,redirectTo:'login'},
    ]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AppRouteModule { }
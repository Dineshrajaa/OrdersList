import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { OrdersComponent } from './components/orders/orders.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', component: OrdersComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrdersRoutingModule { }
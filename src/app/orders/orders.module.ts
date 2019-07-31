import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OrdersComponent } from './components/orders/orders.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { OrdersListItemComponent } from './components/orders-list-item/orders-list-item.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [OrdersComponent, OrdersListComponent, OrdersListItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }

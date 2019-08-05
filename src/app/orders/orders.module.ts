import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { OrdersComponent } from './components/orders/orders.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { OrdersListItemComponent } from './components/orders-list-item/orders-list-item.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';

@NgModule({
  declarations: [OrdersComponent, OrdersListComponent, OrdersListItemComponent, OrderDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    SharedModule,
    RouterModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }

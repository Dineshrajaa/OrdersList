import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { OrderModel } from '../models/order-model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  public ordersList: OrderModel[] = [];
  public refreshOrders = new Subject<OrderModel[]>();

  constructor() { }

  getOrders() {
    return this.ordersList;
  }

  saveOrders(newOrder: OrderModel) {
    this.ordersList.push(newOrder);
    this.refreshOrders.next(this.ordersList); // just to notify the orders list to refresh
  }
}

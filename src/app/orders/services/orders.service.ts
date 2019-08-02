import { Injectable } from '@angular/core';
import { OrderModel } from '../models/order-model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  ordersList: OrderModel[];
  constructor() { }

  getOrders() {
    return this.ordersList;
  }

  saveOrders(newOrder: OrderModel) {
    this.ordersList.push(newOrder);
  }
}

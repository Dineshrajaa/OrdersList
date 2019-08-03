import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { DialogService } from 'src/app/shared/services/dialog.service';
import { OrderModel } from '../models/order-model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  public ordersList: OrderModel[] = [];
  public refreshOrders = new Subject<OrderModel[]>();

  constructor(private dialogService: DialogService) { }

  getOrders() {
    return this.ordersList;
  }

  saveOrders(newOrder: OrderModel) {
    this.ordersList.push(newOrder);
    this.dialogService.closeDialog();
    this.refreshOrders.next(this.ordersList); // just to notify the orders list to refresh
  }
}

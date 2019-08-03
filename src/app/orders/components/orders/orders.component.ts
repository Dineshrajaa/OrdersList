import { Component, OnDestroy, OnInit } from '@angular/core';

import { AddOrderComponent } from '../add-order/add-order.component';
import { DialogService } from '../../../shared/services/dialog.service';
import { MatDialogConfig } from '@angular/material';
import { Subscription } from 'rxjs';
import { OrdersService } from '../../services/orders.service';
import { OrderModel } from '../../models/order-model';

@Component({
  selector: 'oms-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnDestroy, OnInit {

  private ordersSubscription: Subscription;
  public orders: OrderModel[] = [];

  constructor(
    private dialogService: DialogService,
    private ordersService: OrdersService) { }

  ngOnInit() {
    this.listenForNewOrder();
  }

  openAddOrderPopup() {
    const addOrderDialogConfig: MatDialogConfig = {
      width: '600px',
      height: '600px'
    };
    this.dialogService.openDialog(AddOrderComponent, addOrderDialogConfig);
  }

  listenForNewOrder() {
    this.ordersSubscription = this.ordersService.refreshOrders.subscribe((orders) => {
      this.orders = orders;
    });
  }

  unSubscribeListeners() {
    this.ordersSubscription.unsubscribe();
  }

  ngOnDestroy() {
    this.unSubscribeListeners();
  }

}

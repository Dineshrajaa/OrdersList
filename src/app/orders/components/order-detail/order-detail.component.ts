import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { OrdersService } from '../../services/orders.service';
import { OrderModel } from '../../models/order-model';

@Component({
  selector: 'oms-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnDestroy, OnInit {

  private routerSubscription: Subscription;
  private selectedOrderId: number;
  private fetchedOrderDetails: OrderModel;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrdersService) { }

  ngOnInit() {
    this.subscribeToPageChanges();
  }

  subscribeToPageChanges() {
    this.routerSubscription = this.route.params.subscribe(params => {
      this.selectedOrderId = +params.orderId;
      this.fetchOrderDetails(this.selectedOrderId);
    });
  }

  fetchOrderDetails(orderId: number) {
    this.fetchedOrderDetails = this.orderService.getOrderDetails(orderId);
    console.warn(this.fetchedOrderDetails);
  }

  unSubscribe() {
    this.routerSubscription.unsubscribe();
  }

  ngOnDestroy() {
    this.unSubscribe();
  }

}

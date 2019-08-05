import { Component, OnDestroy, OnInit, Input } from '@angular/core';

import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import { OrderModel } from '../../models/order-model';

@Component({
  selector: 'oms-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnDestroy, OnInit {

  @Input()
  orders: OrderModel[];

  @Input()
  searchText: string;

  ordersListHeaderLabels = [
    { label: 'Order#' }, { label: 'Origin' },
    { label: 'Destination' }, { label: 'Reference#' },
    { label: 'Pickup date' }, { label: 'Delivery date' },
    { label: 'Business unit' }, { label: 'Status' }];

  constructor(private mScrollbarService: MalihuScrollbarService) { }

  ngOnInit() {
    this.initializeScroll();
  }

  ngOnDestroy() {
    this.mScrollbarService.destroy('#ol-container');
    this.mScrollbarService.destroy('#order-list');
  }

  initializeScroll() {
    this.mScrollbarService.initScrollbar('#ol-container',
      { axis: 'y', theme: 'dark-thick', scrollButtons: { enable: true } });

    this.mScrollbarService.initScrollbar('#order-list',
      { axis: 'x', theme: 'dark-thick', scrollButtons: { enable: true } });
  }

}

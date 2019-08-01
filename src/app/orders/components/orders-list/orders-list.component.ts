import { Component, OnDestroy, OnInit } from '@angular/core';

import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

@Component({
  selector: 'oms-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnDestroy, OnInit {

  ordersListHeaderLabels: any[] = [
    { 'label': 'Order#', 'colSpan': 1 }, { 'label': 'Origin', 'colSpan': 1 },
    { 'label': 'Destination', 'colSpan': 1 }, { 'label': 'Reference#', 'colSpan': 1 },
    { 'label': 'Pickup date', 'colSpan': 1 }, { 'label': 'Delivery date', 'colSpan': 1 },
    { 'label': 'Business unit', 'colSpan': 1 }, { 'label': 'Status', 'colSpan': 1 }];
  constructor(private mScrollbarService: MalihuScrollbarService) { }

  ngOnInit() {
    this.mScrollbarService.initScrollbar('#ol-container',
      { axis: 'y', theme: 'dark-thick', scrollButtons: { enable: true } });
  }

  ngOnDestroy() {
    this.mScrollbarService.destroy('#ol-container');
  }

}

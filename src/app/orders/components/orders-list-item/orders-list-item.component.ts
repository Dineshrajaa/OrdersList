import { Component, OnInit, Input } from '@angular/core';

import { OrderModel } from '../../models/order-model';

@Component({
  selector: 'oms-orders-list-item',
  templateUrl: './orders-list-item.component.html',
  styleUrls: ['./orders-list-item.component.css']
})
export class OrdersListItemComponent implements OnInit {

  @Input()
  order: OrderModel;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oms-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  ordersListHeaderLabels: string[] = ['Order#', 'Origin',
    'Destination', 'Reference#',
    'Pickup date', 'Delivery date',
    'Business unit', 'Status'];
  constructor() { }

  ngOnInit() {
  }

}

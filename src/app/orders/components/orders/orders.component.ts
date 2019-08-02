import { Component, OnInit } from '@angular/core';

import { AddOrderComponent } from '../add-order/add-order.component';
import { DialogService } from '../../../shared/services/dialog.service';
import { MatDialogConfig } from '@angular/material';

@Component({
  selector: 'oms-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
  }

  openAddOrderPopup() {
    const addOrderDialogConfig: MatDialogConfig = {
      width: '600px',
      height: '600px'
    };
    this.dialogService.openDialog(AddOrderComponent, addOrderDialogConfig);
  }

}

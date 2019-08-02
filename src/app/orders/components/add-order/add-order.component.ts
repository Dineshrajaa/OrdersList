import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as moment from 'moment';

import { ErrorMessages } from '../../../shared/constants/error-messages';
import { OrderModel } from '../../models/order-model';
import { ValidateDate } from '../../validators/date-validator';
import { OrdersService } from '../../services/orders.service';
@Component({
  selector: 'oms-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  placeOrderForm: FormGroup;
  errorMessages = ErrorMessages;
  minPickUpDate = moment().endOf('day').toDate();
  minDeliveryDate = moment().add(1, 'day').endOf('day').toDate();

  constructor(private formBuilder: FormBuilder,
              private orderService: OrdersService) { }

  ngOnInit() {
    this.initializePlaceOrderForm();
  }

  initializePlaceOrderForm() {
    this.placeOrderForm = this.formBuilder.group({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      referenceNumber: [''],
      pickupDate: ['', [Validators.required, ValidateDate]],
      deliveryDate: ['', [Validators.required, ValidateDate]],
      businessUnit: ['', Validators.required]
    });
  }

  get poForm() { return this.placeOrderForm.controls; }

  placeOrder() {
    const orderInstance = new OrderModel(this.placeOrderForm.value);
    this.orderService.saveOrders(orderInstance);
  }

}

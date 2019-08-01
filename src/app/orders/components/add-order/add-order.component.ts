import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ErrorMessages } from '../../../shared/constants/error-messages';

@Component({
  selector: 'oms-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  placeOrderForm: FormGroup;
  errorMessages = ErrorMessages;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initializePlaceOrderForm();
  }

  initializePlaceOrderForm() {
    this.placeOrderForm = this.formBuilder.group({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      referenceNumber: [''],
      pickupDate: ['', Validators.required],
      deliveryDate: ['', Validators.required],
      businessUnit: ['', Validators.required]
    });
  }

  get poForm() { return this.placeOrderForm.controls; }

}

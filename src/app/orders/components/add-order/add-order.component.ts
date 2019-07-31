import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'oms-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  placeOrderForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  initializePlaceOrderForm(){
    this.placeOrderForm = this.formBuilder.group({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      referenceNumber: [''],
      pickupDate: ['', Validators.required],
      deliveryDate: ['', Validators.required],
      businessUnit: ['', Validators.required]
  });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'oms-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showSuccess() {
    alert('Thanks for contacting us');
    this.router.navigate(['/orders']);
  }

}

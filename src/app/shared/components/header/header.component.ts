import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'oms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()
  public sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}

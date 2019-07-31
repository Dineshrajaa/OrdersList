import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'oms-side-bar-list',
  templateUrl: './side-bar-list.component.html',
  styleUrls: ['./side-bar-list.component.css']
})
export class SideBarListComponent implements OnInit {

  @Output()
  public sidenavClose = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSidenavClose() {
    this.sidenavClose.emit();
  }

}

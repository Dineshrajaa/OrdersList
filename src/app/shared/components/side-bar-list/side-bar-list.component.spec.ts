import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarListComponent } from './side-bar-list.component';

describe('SideBarListComponent', () => {
  let component: SideBarListComponent;
  let fixture: ComponentFixture<SideBarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

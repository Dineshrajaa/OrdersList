import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { MatModule } from '../mat/mat.module';
import { SideBarListComponent } from './components/side-bar-list/side-bar-list.component';
import { RouterModule } from '../../../node_modules/@angular/router';


@NgModule({
  declarations: [HeaderComponent, SideBarListComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatModule,
    RouterModule
  ], exports: [
    HeaderComponent,
    MatModule,
    SideBarListComponent
  ]
})
export class SharedModule { }

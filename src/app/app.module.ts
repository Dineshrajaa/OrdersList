import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { MatSidenavModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { MatModule } from './mat/mat.module';
import { SharedModule } from './shared/shared.module';
import { AddOrderComponent } from './orders/components/add-order/add-order.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    AddOrderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MalihuScrollbarModule.forRoot(),
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddOrderComponent]
})
export class AppModule { }

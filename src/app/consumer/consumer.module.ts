import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { PaginationModule } from 'ngx-bootstrap/pagination';


import { ConsumerRoutingModule } from './consumer-routing.module';
import { ConsumerComponent } from './consumer.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    ConsumerComponent,
    BuyComponent,
    SellComponent,
    CustomerViewComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ConsumerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot()
  
  ]
})
export class ConsumerModule { }

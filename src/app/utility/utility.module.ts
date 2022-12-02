import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'


import { UtilityRoutingModule } from './utility-routing.module';
import { UtilityComponent } from './utility.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PpaTableComponent } from './ppa-table/ppa-table.component';
import { PpaFormComponent } from './ppa-form/ppa-form.component';
import { PbFormComponent } from './pb-form/pb-form.component';
import { CreatePbComponent } from './create-pb/create-pb.component';
import { CreatePpaComponent } from './create-ppa/create-ppa.component';
import { MyGeneratorsComponent } from './my-generators/my-generators.component';
import { UtilityDashboardComponent } from './utility-dashboard/utility-dashboard.component';


@NgModule({
  declarations: [
    UtilityComponent,
    NavbarComponent,
    PpaTableComponent,
    PpaFormComponent,
    PbFormComponent,
    CreatePbComponent,
    CreatePpaComponent,
    MyGeneratorsComponent,
    UtilityDashboardComponent
  ],
  imports: [
    CommonModule,
    UtilityRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot()

  ]
})
export class UtilityModule { }

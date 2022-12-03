import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import { GeneratorRoutingModule } from './generator-routing.module';
import { GeneratorComponent } from './generator.component';
import { PpaTableComponent } from './ppa-table/ppa-table.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NavbarComponent } from './navbar/navbar.component';
import { PpaFormComponent } from './ppa-form/ppa-form.component';
import { PbFormComponent } from './pb-form/pb-form.component';
import { CreatePbComponent } from './create-pb/create-pb.component';
import { CreatePpaComponent } from './create-ppa/create-ppa.component';
import { MyGeneratorsComponent } from './my-generators/my-generators.component';
import { UtilityDashboardComponent } from './utility-dashboard/utility-dashboard.component';



@NgModule({
  declarations: [
    GeneratorComponent,
    PpaTableComponent,
    NavbarComponent,
    PpaFormComponent,
    PbFormComponent,
    CreatePbComponent,
    CreatePpaComponent,
    MyGeneratorsComponent,
    UtilityDashboardComponent
  ],
  imports: [
    CommonModule,
    GeneratorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot()
  ]
})
export class GeneratorModule { }

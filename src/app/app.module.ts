import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TradingComponent } from './trading/trading.component';
import {NavbarComponent} from './navbar/navbar.component'
import { GeneratorsComponent } from './generators/generators.component';
import { UtilityTcComponent } from './utility-tc/utility-tc.component';
import { PbTcComponent } from './pb-tc/pb-tc.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    WelcomeComponent,
    TradingComponent,
    NavbarComponent,
    GeneratorsComponent,
    UtilityTcComponent,
    PbTcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

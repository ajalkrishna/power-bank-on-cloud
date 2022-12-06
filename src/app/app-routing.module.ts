import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PbTcComponent } from './pb-tc/pb-tc.component';
import { UtilityTcComponent } from './utility-tc/utility-tc.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'utility', loadChildren: () => import('./utility/utility.module').then(m => m.UtilityModule) },
  {path:'home',component:WelcomeComponent},
  {path:'login',component:LoginComponent},
  { path: 'consumer', loadChildren: () => import('./consumer/consumer.module').then(m => m.ConsumerModule) },
  { path: 'generator', loadChildren: () => import('./generator/generator.module').then(m => m.GeneratorModule) },
  { path: 'retailer', loadChildren: () => import('./retailer/retailer.module').then(m => m.RetailerModule) },
  {path:'ppa-terms&conditions',component:UtilityTcComponent},
  {path:'pb-terms&conditions',component:PbTcComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

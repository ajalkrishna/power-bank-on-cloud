import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'utility', loadChildren: () => import('./utility/utility.module').then(m => m.UtilityModule) },
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  { path: 'consumer', loadChildren: () => import('./consumer/consumer.module').then(m => m.ConsumerModule) },
  { path: 'generator', loadChildren: () => import('./generator/generator.module').then(m => m.GeneratorModule) },
  { path: 'retailer', loadChildren: () => import('./retailer/retailer.module').then(m => m.RetailerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

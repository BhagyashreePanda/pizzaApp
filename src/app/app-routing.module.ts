import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

const routes: Routes = [
  {path:'', component: UserAuthComponent},
  {path:'login', component: UserAuthComponent},
  {path:'home', component: HomeComponent},
  {path:'checkout', component: CheckoutComponent},
  {path:'item-detail/:id', component: ItemDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

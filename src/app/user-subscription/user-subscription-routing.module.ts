import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSubscriptionComponent } from './user-subscription.component';

const routes: Routes = [
  {
    path: '',
    component: UserSubscriptionComponent
  },

  {
    path: '',
    redirectTo: 'usersubscription',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSubscriptionRoutingModule {}

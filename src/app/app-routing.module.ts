import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'usersubscription',
    loadChildren: () =>
      import('./user-subscription/user-subscription.module').then((m) => m.UserSubscriptionModule)
  },

  {
    path: '',
    redirectTo: 'usersubscription',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

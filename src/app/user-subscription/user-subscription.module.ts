import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { UserSubscriptionRoutingModule } from './user-subscription-routing.module';
import { UserSubscriptionComponent } from './user-subscription.component';

@NgModule({
  imports: [CommonModule, UserSubscriptionRoutingModule],
  declarations: [UserSubscriptionComponent, LeftSidebarComponent, PageHeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserSubscriptionModule {}

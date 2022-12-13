import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserSubscriptionRoutingModule } from './user-subscription-routing.module';
import { PageHeaderComponent } from './page-header/page-header.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';

@NgModule({
  declarations: [PageHeaderComponent, LeftSidebarComponent],
  imports: [CommonModule, UserSubscriptionRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserSubscriptionModule {}

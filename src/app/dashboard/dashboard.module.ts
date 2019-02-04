import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../core';
import { FeatureListingComponent } from '../feature/feature-listing/feature-listing.component';
import { VirtualscrollComponent } from '../feature/virtualscroll/virtualscroll.component';
import { PaginationComponent } from '../feature/pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    // add child modules here
    MaterialModule
  ],
  declarations: [DashboardComponent,
    FeatureListingComponent,
    VirtualscrollComponent,
    PaginationComponent,
    SideNavComponent,
    ToolbarComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true
  }]
})
export class DashboardModule { }

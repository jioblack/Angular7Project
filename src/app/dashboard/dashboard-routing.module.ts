import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuardService } from '../core/services/auth-guard.service';
import { FeatureListingComponent } from '../feature/feature-listing/feature-listing.component';
import { VirtualscrollComponent } from '../feature/virtualscroll/virtualscroll.component';
import { PaginationComponent } from '../feature/pagination/pagination.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'features',
        component: FeatureListingComponent,
        canActivateChild: [AuthGuardService]
      },
      {
        path: 'virtualscroll',
        component: VirtualscrollComponent,
        canActivateChild: [AuthGuardService]
      },
      {
        path: 'pagination',
        component: PaginationComponent,
        canActivateChild: [AuthGuardService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

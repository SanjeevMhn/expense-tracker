import { Routes } from '@angular/router';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      { path: 'home', component: DashboardComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];

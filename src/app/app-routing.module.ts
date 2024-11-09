import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouteSelectionComponent } from './route-selection/route-selection.component';
import { EcoPointsComponent } from './eco-points/eco-points.component';
import { ProfileComponent } from './profile/profile.component';
import { GamificationComponent } from './gamification/gamification.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'route-selection', component: RouteSelectionComponent },
  { path: 'eco-points', component: EcoPointsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'gamification', component: GamificationComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
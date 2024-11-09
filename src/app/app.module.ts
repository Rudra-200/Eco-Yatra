import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouteSelectionComponent } from './route-selection/route-selection.component';
import { EcoPointsComponent } from './eco-points/eco-points.component';
import { ProfileComponent } from './profile/profile.component';
import { GamificationComponent } from './gamification/gamification.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RouteSelectionComponent,
    EcoPointsComponent,
    ProfileComponent,
    GamificationComponent,
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
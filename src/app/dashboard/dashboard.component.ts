import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'ns-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  airQualityIndex = 75;
  trafficCondition = 'Moderate';
  co2SavedToday = 2.5;
  ecoPoints = 150;
  dailyChallenge = 'Reduce emissions by 30% today';
  challengeProgress = 60;
  recentTrips = [
    { date: '2023-05-15', distance: 5.2, ecoPointsEarned: 20, co2Saved: 0.8 },
    { date: '2023-05-14', distance: 3.7, ecoPointsEarned: 15, co2Saved: 0.6 },
    { date: '2023-05-13', distance: 7.1, ecoPointsEarned: 30, co2Saved: 1.2 },
  ];

  constructor(private routerExtensions: RouterExtensions) {}

  ngOnInit() {
    // Initialize data
  }

  getAirQualityClass() {
    if (this.airQualityIndex < 50) return 'text-success';
    if (this.airQualityIndex < 100) return 'text-warning';
    return 'text-danger';
  }

  getTrafficClass() {
    if (this.trafficCondition === 'Light') return 'text-success';
    if (this.trafficCondition === 'Moderate') return 'text-warning';
    return 'text-danger';
  }

  onPlanRoute() {
    this.routerExtensions.navigate(['/route-selection']);
  }

  onViewLeaderboard() {
    this.routerExtensions.navigate(['/gamification']);
  }
}
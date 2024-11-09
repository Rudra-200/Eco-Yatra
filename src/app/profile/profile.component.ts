import { Component } from '@angular/core';

@Component({
  selector: 'ns-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userName = 'John Doe';
  memberSince = 'May 2023';
  totalTrips = 47;
  totalCO2Saved = 125.5;
  totalDistance = 352.8;
  ecoPoints = 750;

  achievements = [
    { name: 'Early Bird', description: 'Completed 10 trips before 8 AM', icon: '&#xf05b;' },
    { name: 'Cycle Enthusiast', description: 'Cycled for a total of 100 km', icon: '&#xf206;' },
    { name: 'Green Warrior', description: 'Saved 50 kg of CO2 emissions', icon: '&#xf06c;' },
    { name: 'Consistent Commuter', description: 'Used EcoYatra for 30 consecutive days', icon: '&#xf073;' },
  ];

  onEditProfile() {
    // Implement edit profile logic
    console.log('Editing profile');
  }

  onPreferences() {
    // Implement preferences navigation
    console.log('Opening preferences');
  }
}
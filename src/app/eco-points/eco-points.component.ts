import { Component } from '@angular/core';

@Component({
  selector: 'ns-eco-points',
  templateUrl: './eco-points.component.html',
  styleUrls: ['./eco-points.component.css']
})
export class EcoPointsComponent {
  totalEcoPoints = 750;
  nextRewardAt = 1000;
  progressToNextReward = 75;
  pointsToNextReward = 250;

  rewards = [
    { name: 'Eco-friendly Water Bottle', points: 500, description: 'Reusable bottle made from recycled materials' },
    { name: '10% Off at Green Grocery', points: 750, description: 'Discount on your next purchase at Green Grocery' },
    { name: 'Free Bike Tune-up', points: 1000, description: 'Complete tune-up at our partner bike shop' },
    { name: 'Plant a Tree', points: 1500, description: 'We\'ll plant a tree in your name' },
  ];

  onRedeemReward(reward: any) {
    // Implement reward redemption logic
    console.log('Redeeming reward:', reward.name);
  }
}
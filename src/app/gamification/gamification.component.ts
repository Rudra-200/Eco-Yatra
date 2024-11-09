import { Component } from '@angular/core';

@Component({
  selector: 'ns-gamification',
  templateUrl: './gamification.component.html',
  styleUrls: ['./gamification.component.css']
})
export class GamificationComponent {
  activeChallenges = [
    { name: 'Cycle Week', description: 'Use a bicycle for all trips this week', reward: 100, progress: 60 },
    { name: 'No-Car Day', description: 'Avoid using a car for an entire day', reward: 50, progress: 100 },
    { name: 'Green Commuter', description: 'Use public transport for 5 consecutive days', reward: 75, progress: 40 },
  ];

  upcomingChallenges = [
    { name: 'Walk-a-thon', description: 'Walk at least 10,000 steps every day for a week', reward: 150, startDate: '2023-06-01' },
    { name: 'Carpool King', description: 'Carpool for at least 3 trips this month', reward: 80, startDate: '2023-06-05' },
  ];

  leaderboard = [
    { name: 'Vamsi', points: 1250 },
    { name: 'Harshit', points: 1180 },
    { name: 'Rudra', points: 1050 },
    { name: 'Pavan', points: 980 },
    { name: 'Charan', points: 920 },
    { name: 'Mohan', points: 890 },
    { name: 'Saketh', points: 850 },
    { name: 'Mir', points: 820 },
    { name: 'Aditya', points: 790 },
    { name: 'Lokesh', points: 760 },
  ];
}
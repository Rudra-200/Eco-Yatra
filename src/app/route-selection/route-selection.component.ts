import { Component } from '@angular/core';

@Component({
  selector: 'ns-route-selection',
  templateUrl: './route-selection.component.html',
  styleUrls: ['./route-selection.component.css']
})
export class RouteSelectionComponent {
  routes = [
    { name: 'Cycle Route', mode: 'bicycle', duration: '25 min', distance: 5.2, co2Saved: 1.5, ecoPoints: 30 },
    { name: 'Walk Route', mode: 'walking', duration: '45 min', distance: 3.7, co2Saved: 0.8, ecoPoints: 20 },
    { name: 'Bus Route', mode: 'bus', duration: '20 min', distance: 6.1, co2Saved: 0.5, ecoPoints: 15 },
  ];

  onFindRoutes() {
    // Implement route finding logic
  }

  getTransportIcon(mode: string): string {
    switch (mode) {
      case 'bicycle': return '&#xf206;';
      case 'walking': return '&#xf554;';
      case 'bus': return '&#xf207;';
      default: return '&#xf1b9;';
    }
  }
}
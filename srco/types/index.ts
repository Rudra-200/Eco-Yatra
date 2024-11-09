export interface Route {
  id: string;
  start: {
    lat: number;
    lng: number;
    name: string;
  };
  end: {
    lat: number;
    lng: number;
    name: string;
  };
  distance: number;
  duration: number;
  ecoScore: number;
}

export interface User {
  id: string;
  name: string;
  ecoPoints: number;
  carbonSaved: number;
  routes: Route[];
}

export interface EcoReward {
  id: string;
  name: string;
  description: string;
  pointsCost: number;
  category: 'transport' | 'food' | 'retail';
}
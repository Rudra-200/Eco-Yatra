import { create } from 'zustand';

interface User {
  ecoPoints: number;
  carbonSaved: number;
}

interface Reward {
  id: string;
  name: string;
  description: string;
  pointsCost: number;
}

interface Store {
  user: User | null;
  availableRewards: Reward[];
}

export const useStore = create<Store>(() => ({
  user: {
    ecoPoints: 150,
    carbonSaved: 25.5
  },
  availableRewards: [
    {
      id: '1',
      name: 'Free Coffee',
      description: 'Get a free coffee at EcoCafe',
      pointsCost: 100
    },
    {
      id: '2',
      name: 'Bus Pass',
      description: 'One day bus pass',
      pointsCost: 200
    },
    {
      id: '3',
      name: 'Bike Rental',
      description: '2 hours free bike rental',
      pointsCost: 300
    }
  ]
}));
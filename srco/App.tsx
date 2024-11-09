import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Notifications } from '@mantine/notifications';
import { AuthGuard } from './components/Auth/AuthGuard';
import { RouteMap } from './components/Map/RouteMap';
import { EcoStats } from './components/Dashboard/EcoStats';
import { RewardsList } from './components/Rewards/RewardsList';
import { Achievements } from './components/Gamification/Achievements';
import '@mantine/core/styles.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      retry: 1
    }
  }
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider defaultColorScheme="light">
        <Notifications />
        <AuthGuard>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
            <h1>EcoYatra</h1>
            
            <div style={{ marginBottom: '2rem' }}>
              <RouteMap />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <EcoStats />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h2>Achievements</h2>
              <Achievements />
            </div>

            <div>
              <h2>Available Rewards</h2>
              <RewardsList />
            </div>
          </div>
        </AuthGuard>
      </MantineProvider>
    </QueryClientProvider>
  );
}
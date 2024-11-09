import { Paper, Group, Text, RingProgress } from '@mantine/core';
import { useStore } from '../../store/useStore';

export function EcoStats() {
  const user = useStore(state => state.user);
  
  return (
    <Paper shadow="sm" p="md">
      <Group position="apart">
        <div>
          <Text size="xl" weight={500}>Eco Points</Text>
          <Text size="lg">{user?.ecoPoints || 0}</Text>
        </div>
        <RingProgress
          size={80}
          thickness={8}
          sections={[{ value: 65, color: 'green' }]}
          label={
            <Text size="xs" align="center">65%</Text>
          }
        />
      </Group>
      <Text mt="md">Carbon Saved: {user?.carbonSaved || 0}kg CO2</Text>
    </Paper>
  );
}
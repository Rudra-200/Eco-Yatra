import { SimpleGrid, Card, Text, Button } from '@mantine/core';
import { useStore } from '../../store/useStore';

export function RewardsList() {
  const rewards = useStore(state => state.availableRewards);
  
  return (
    <SimpleGrid cols={3} spacing="lg">
      {rewards.map(reward => (
        <Card key={reward.id} shadow="sm" p="lg">
          <Text size="lg" weight={500}>{reward.name}</Text>
          <Text size="sm" color="dimmed">{reward.description}</Text>
          <Text mt="md">{reward.pointsCost} points</Text>
          <Button variant="light" color="green" fullWidth mt="md">
            Redeem
          </Button>
        </Card>
      ))}
    </SimpleGrid>
  );
}
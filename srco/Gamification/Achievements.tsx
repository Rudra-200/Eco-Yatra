import { Paper, Text, Progress, SimpleGrid, ThemeIcon } from '@mantine/core';
import { IconTrophy, IconBike, IconLeaf, IconRecycle } from '@tabler/icons-react';

const achievements = [
  {
    id: 1,
    title: 'Eco Warrior',
    description: 'Complete 50 green routes',
    progress: 65,
    icon: IconTrophy,
  },
  {
    id: 2,
    title: 'Cycle Master',
    description: 'Cycle 100km total distance',
    progress: 45,
    icon: IconBike,
  },
  {
    id: 3,
    title: 'Carbon Reducer',
    description: 'Save 100kg CO2',
    progress: 30,
    icon: IconLeaf,
  },
  {
    id: 4,
    title: 'Green Streak',
    description: '7 days consecutive eco-travel',
    progress: 85,
    icon: IconRecycle,
  },
];

export function Achievements() {
  return (
    <SimpleGrid cols={2} spacing="lg">
      {achievements.map((achievement) => (
        <Paper key={achievement.id} shadow="sm" p="md">
          <Group position="apart" mb="xs">
            <div>
              <Text weight={500}>{achievement.title}</Text>
              <Text size="sm" color="dimmed">
                {achievement.description}
              </Text>
            </div>
            <ThemeIcon size="lg" radius="xl" color="green">
              <achievement.icon size={20} />
            </ThemeIcon>
          </Group>
          <Progress 
            value={achievement.progress} 
            color="green" 
            size="sm" 
            radius="xl" 
          />
          <Text size="xs" align="right" mt={5}>
            {achievement.progress}%
          </Text>
        </Paper>
      ))}
    </SimpleGrid>
  );
}
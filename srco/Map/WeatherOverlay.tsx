import { Paper, Text, Group } from '@mantine/core';

interface WeatherOverlayProps {
  weather: any;
  pollution: any;
  position: { lat: number; lng: number };
}

export function WeatherOverlay({ weather, pollution, position }: WeatherOverlayProps) {
  if (!weather || !pollution) return null;

  return (
    <Paper
      shadow="sm"
      p="md"
      style={{
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
      }}
    >
      <Group spacing="xl">
        <div>
          <Text size="sm" weight={500}>Temperature</Text>
          <Text>{weather.main.temp}°C</Text>
        </div>
        <div>
          <Text size="sm" weight={500}>Air Quality</Text>
          <Text>{pollution.data.aqi} AQI</Text>
        </div>
      </Group>
    </Paper>
  );
}
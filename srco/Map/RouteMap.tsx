import { Paper, Button, Group } from '@mantine/core';
import Map, { 
  NavigationControl, 
  Marker, 
  Source, 
  Layer,
  LayerProps 
} from 'react-map-gl';
import { useQuery } from '@tanstack/react-query';
import { getWeatherData, getPollutionData } from '../../services/api';
import { WeatherOverlay } from './WeatherOverlay';
import { useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';

const routeLayer: LayerProps = {
  id: 'route',
  type: 'line',
  paint: {
    'line-color': '#2ecc71',
    'line-width': 3
  }
};

export function RouteMap() {
  const [coordinates, setCoordinates] = useState({
    lat: 12.9716,
    lng: 77.5946
  });

  const { data: weatherData } = useQuery({
    queryKey: ['weather', coordinates],
    queryFn: () => getWeatherData(coordinates.lat, coordinates.lng)
  });

  const { data: pollutionData } = useQuery({
    queryKey: ['pollution', coordinates],
    queryFn: () => getPollutionData(coordinates.lat, coordinates.lng)
  });

  return (
    <Paper shadow="sm" style={{ height: '500px' }}>
      <Map
        initialViewState={{
          longitude: coordinates.lng,
          latitude: coordinates.lat,
          zoom: 12
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
      >
        <NavigationControl />
        <WeatherOverlay 
          weather={weatherData} 
          pollution={pollutionData}
          position={coordinates}
        />
        
        <Group position="center" style={{ position: 'absolute', bottom: 20, width: '100%' }}>
          <Button color="green">Start Eco Route</Button>
          <Button variant="light">Show Achievements</Button>
        </Group>
      </Map>
    </Paper>
  );
}
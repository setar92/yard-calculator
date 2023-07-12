import React from 'react';

import {
  GoogleMap,
  Marker,
  MarkerClusterer,
  useJsApiLoader,
} from '@react-google-maps/api';

type librarieType =
  | 'places'
  | 'drawing'
  | 'geometry'
  | 'localContext'
  | 'visualization';
const libraries: librarieType[] = ['places'];

const MapComponent: React.FC = () => {
  // Mocked locations data
  const locations = [
    { lat: 40.712776, lng: -74.0051, title: 'New York' },
    { lat: 40.712111, lng: -74.0052, title: 'New York' },
    { lat: 40.712222, lng: -74.0053, title: 'New York' },
    { lat: 40.712333, lng: -74.0054, title: 'New York' },
    { lat: 40.712444, lng: -74.0055, title: 'New York' },
    { lat: 40.712555, lng: -74.0056, title: 'New York' },
    { lat: 40.712666, lng: -74.0057, title: 'New York' },
    { lat: 40.712776, lng: -74.005974, title: 'New York' },
    { lat: 34.052235, lng: -118.243683, title: 'Los Angeles' },
    { lat: 41.878113, lng: -87.629799, title: 'Chicago' },
    // Add more locations here...
  ];

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP as string,
    libraries,
  });

  if (!isLoaded) {
    return <div>Map is loading...</div>;
  }
  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={4}>
      <MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>
        {(clusterer): JSX.Element => (
          <div>
            {locations.map((location, index) => (
              <Marker
                key={index}
                position={{ lat: location.lat, lng: location.lng }}
                clusterer={clusterer}
                title={location.title}
              />
            ))}
          </div>
        )}
      </MarkerClusterer>
    </GoogleMap>
  );
};
export { MapComponent };

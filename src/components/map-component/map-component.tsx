import React from 'react';
import uuid from 'react-uuid';

import {
  GoogleMap,
  Marker,
  MarkerClusterer,
  useJsApiLoader,
} from '@react-google-maps/api';

import { allLocationsData } from '../../common/constants';

type librarieType =
  | 'places'
  | 'drawing'
  | 'geometry'
  | 'localContext'
  | 'visualization';
const libraries: librarieType[] = ['places'];

const MapComponent: React.FC = () => {
  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };
  const defaultOptions = {
    panControl: true,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcurs: false,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    fullscreenControl: false,
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP as string,
    libraries,
  });

  if (!isLoaded) {
    return <div>Map is loading...</div>;
  }
  return (
    <div className="flex justify-center">
      <GoogleMap
        mapContainerClassName="w-[100vw] h-[89vh]"
        center={center}
        zoom={4}
        options={defaultOptions}
      >
        <MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>
          {(clusterer): JSX.Element => (
            <div>
              {allLocationsData.map((locationData) => {
                return locationData.data.map((loc) => {
                  return (
                    <Marker
                      key={uuid()}
                      position={{ lat: loc.latitude, lng: loc.longitude }}
                      clusterer={clusterer}
                    />
                  );
                });
              })}
            </div>
          )}
        </MarkerClusterer>
      </GoogleMap>
    </div>
  );
};
export { MapComponent };

import React from 'react';
import uuid from 'react-uuid';

import {
  GoogleMap,
  Marker,
  MarkerClusterer,
  useJsApiLoader,
} from '@react-google-maps/api';

import { Loader } from '..';
import {
  allLocationsData,
  defaultOptions,
  libraries,
} from '../../common/constants';
import { CommonLocation } from '../../common/types';

interface MapInterface {
  showData: (location: CommonLocation) => void;
}

const center = {
  lat: 24.103152,
  lng: 56.926608,
};

const MapComponent: React.FC<MapInterface> = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP as string,
    libraries,
  });

  if (!isLoaded) {
    return <Loader />;
  }
  return (
    <div className="flex justify-center">
      <GoogleMap
        mapContainerClassName="w-[100vw] h-[89vh]"
        center={center}
        zoom={8}
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
                      icon={{
                        url: `${loc.iconUrl}`,
                      }}
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

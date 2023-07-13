import React, { useState, useEffect } from 'react';
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
import {
  CommonLocation,
  IAllLocationsData,
  ICoordinates,
} from '../../common/types';
import { filterData } from '../../helpers';
import { useAppSelector } from '../../hooks/store/store.hooks';

interface MapInterface {
  showData: (location: CommonLocation) => void;
}

const MapComponent: React.FC<MapInterface> = ({ showData }) => {
  const filterCriterions = useAppSelector((state) => state.filter);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP as string,
    libraries,
  });
  const [allLocations, setAllLocations] = useState<IAllLocationsData[]>([]);
  const [position, setPosition] = useState<ICoordinates>({
    lat: 56.951289,
    lng: 24.125341,
  });

  useEffect(() => {
    const locationsData = filterData(allLocationsData, filterCriterions);
    setAllLocations(locationsData);
  }, [filterCriterions]);
  const choosePostMachineHandler = (location: CommonLocation): void => {
    showData(location);
    setPosition({
      lat: location.latitude,
      lng: location.longitude,
    });
  };

  if (!isLoaded) {
    return <Loader />;
  }
  return (
    <div className="flex justify-center">
      <GoogleMap
        mapContainerClassName="w-[100vw] h-[89vh]"
        center={position}
        zoom={8}
        options={defaultOptions}
      >
        <MarkerClusterer averageCenter enableRetinaIcons gridSize={50}>
          {(clusterer): JSX.Element => (
            <div>
              {allLocations.map((locationData) => {
                return locationData.data.map((loc) => {
                  return (
                    <Marker
                      key={uuid()}
                      position={{ lat: loc.latitude, lng: loc.longitude }}
                      clusterer={clusterer}
                      icon={{
                        url: `${locationData.marker}`,
                      }}
                      onClick={(): void => choosePostMachineHandler(loc)}
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

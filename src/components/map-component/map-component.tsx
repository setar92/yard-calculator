import React, { useCallback, useState } from 'react';
import {} from 'react-redux';

import {
  GoogleMap,
  MarkerClusterer,
  useJsApiLoader,
} from '@react-google-maps/api';

import { Loader, MemoizedMarker } from '..';
import { defaultOptions, libraries } from '../../common/constants';
import { CommonLocation, ICoordinates } from '../../common/types';
import { useAppSelector } from '../../hooks/store/store.hooks';
import { selectFilteredLocations } from '../../store/selectors/filtered-locations';

interface MapInterface {
  showData: (location: CommonLocation) => void;
}

const MapComponent: React.FC<MapInterface> = ({ showData }) => {
  const allLocations = useAppSelector(selectFilteredLocations);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP as string,
    libraries,
  });
  const [position, setPosition] = useState<ICoordinates>({
    lat: 56.951289,
    lng: 24.125341,
  });

  const choosePostMachineHandler = useCallback(
    (location: CommonLocation): void => {
      showData(location);
      setPosition({
        lat: location.latitude,
        lng: location.longitude,
      });
    },
    [],
  );

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
        <MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>
          {(clusterer): JSX.Element => (
            <div>
              {allLocations.map((locationData, index) => {
                return locationData.data.map((loc, ind) => {
                  return (
                    <MemoizedMarker
                      choosePostMachineHandler={choosePostMachineHandler}
                      clusterer={clusterer}
                      location={loc}
                      markerUrl={locationData.marker}
                      key={ind + index}
                    />
                    // <Marker
                    //   key={uuid()}
                    //   position={{ lat: loc.latitude, lng: loc.longitude }}
                    //   clusterer={clusterer}
                    //   icon={{
                    //     url: `${locationData.marker}`,
                    //     scaledSize: new google.maps.Size(40, 40),
                    //   }}
                    //   onClick={(): void => choosePostMachineHandler(loc)}
                    // />
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

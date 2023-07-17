import React, { FC } from 'react';
import uuid from 'react-uuid';

import { Marker, MarkerClusterer } from '@react-google-maps/api';

import { CommonLocation } from '../../common/types';
import { useAppSelector } from '../../hooks/store/store.hooks';
import { selectFilteredLocations } from '../../store/selectors/filtered-locations';
interface FormMapProps {
  choosePostMachineHandler: (location: CommonLocation) => Promise<void>;
}
const ClusterComponent: FC<FormMapProps> = ({ choosePostMachineHandler }) => {
  const allLocations = useAppSelector(selectFilteredLocations);

  return (
    <>
      <MarkerClusterer averageCenter enableRetinaIcons gridSize={15}>
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
                      scaledSize: new google.maps.Size(40, 40),
                    }}
                    onClick={(): Promise<void> => choosePostMachineHandler(loc)}
                  />
                );
              });
            })}
          </div>
        )}
      </MarkerClusterer>
    </>
  );
};

export const MemoizedCluster = React.memo(ClusterComponent);

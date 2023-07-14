import React, { FC } from 'react';
import uuid from 'react-uuid';

import { Marker, MarkerClusterer } from '@react-google-maps/api';

import { CommonLocation, IAllLocationsData } from '../../common/types';

interface FormMapProps {
  allLocations: IAllLocationsData[];
  choosePostMachineHandler: (location: CommonLocation) => Promise<void>;
}
const ClusterComponent: FC<FormMapProps> = ({
  allLocations,
  choosePostMachineHandler,
}) => {
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

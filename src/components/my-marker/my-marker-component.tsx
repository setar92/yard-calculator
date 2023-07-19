import React, { FC } from 'react';

import { Marker, MarkerClusterer } from '@react-google-maps/api';

import { CommonLocation } from '../../common/types';

interface MyMarkerProps {
  location: CommonLocation;
  markerUrl: string;
  choosePostMachineHandler: (location: CommonLocation) => void;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  clusterer: Clusterer | MarkerClusterer | undefined;
}
const MyMarker: FC<MyMarkerProps> = ({
  choosePostMachineHandler,
  clusterer,
  location,
  markerUrl,
}) => {
  return (
    <>
      <Marker
        position={{ lat: location.latitude, lng: location.longitude }}
        clusterer={clusterer}
        icon={{
          url: `${markerUrl}`,
          scaledSize: new google.maps.Size(40, 40),
        }}
        onClick={(): void => choosePostMachineHandler(location)}
      />
    </>
  );
};

export const MemoizedMarker = React.memo(MyMarker);

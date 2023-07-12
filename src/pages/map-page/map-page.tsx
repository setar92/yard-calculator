import { FC, useState } from 'react';

import { useJsApiLoader } from '@react-google-maps/api';

import { CommonLocation } from '../../common/types';
import {
  Loader,
  MapComponent,
  AdditionalInfo,
  Filter,
  Header,
} from '../../components';

const MapPage: FC = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP as string,
    libraries: ['places'],
  });
  const [location, setLocation] = useState<CommonLocation>();

  const hideInformation = (): void => {
    if (location) {
      setLocation({ ...location, address: '' });
    }
  };

  return (
    <div className="flex flex-col">
      <Header />
      <div className="bg-white w-[100vw] flex relative">
        {location?.address && (
          <AdditionalInfo
            hideInformation={hideInformation}
            location={location}
          />
        )}
        {isLoaded ? <MapComponent showData={setLocation} /> : <Loader />}
        <Filter />
      </div>
    </div>
  );
};

export { MapPage };

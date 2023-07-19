import { FC, useState } from 'react';

import { CommonLocation } from '../../common/types';
import { MapComponent, AdditionalInfo, Filter, Header } from '../../components';

const MapPage: FC = () => {
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
        {<MapComponent showData={setLocation} />}
        <Filter />
      </div>
    </div>
  );
};

export { MapPage };

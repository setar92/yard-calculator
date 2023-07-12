import { FC } from 'react';

import { MapComponent, Header } from '../../components';
const MapPage: FC = () => {
  return (
    <div>
      <Header />
      <MapComponent></MapComponent>
    </div>
  );
};

export { MapPage };

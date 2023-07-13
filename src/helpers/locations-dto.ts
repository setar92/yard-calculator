import { CommonLocation } from '../common/types';
import {
  locationsNationalPost,
  locationsOmniva,
  locationsVenipak,
  locationsuDrop,
  locationsDPD,
  locationLVPost,
  // locationGLS,
} from '../mock-data';

const commonNationalPost = locationsNationalPost as CommonLocation[];
const commonOmnivaPost = locationsOmniva as CommonLocation[];
const commonVenipakPost = locationsVenipak as CommonLocation[];
const commonuDropPost = locationsuDrop as CommonLocation[];

const commonDPDPost = locationsDPD as CommonLocation[];
const commonStokker: CommonLocation[] = [
  {
    address: 'Krasta iela 42, Latgales priekšpilsēta, Rīga, LV-1003, Латвія',
    city: ['Rīga'],
    country: 'LV',
    iconUrl: 's.svg',
    latitude: 56.935571804128486,
    longitude: 24.139749741575724,
    name: 'Stokker',
    owner: 'Stokker',
    img: 'stokker.jpg',
  },
];
const commonLVPost = locationLVPost as CommonLocation[];

export {
  commonNationalPost,
  commonOmnivaPost,
  commonVenipakPost,
  commonuDropPost,
  commonDPDPost,
  commonStokker,
  commonLVPost,
};

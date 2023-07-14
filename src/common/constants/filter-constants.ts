import {
  commonNationalPost,
  commonOmnivaPost,
  commonVenipakPost,
  commonuDropPost,
  commonDPDPost,
  commonStokker,
  commonLVPost,
} from '../../helpers/locations-dto';
import { IAllLocationsData } from '../types';

const cities = [
  ['All', 'All'],
  ['Riga', 'Rīga'],
  ['Jurmala', 'Jūrmala'],
  ['Tallinn', 'Tallinn'],
  ['Vilnius', 'Vilnius'],
  ['Kaunas', 'Kaunas'],
  ['Klaipeda', 'Klaip\u0117da'],
  ['Daugavpils', 'Daugavpils'],
  ['Budapest', 'Budapest'],
];
const countries = [
  ['All', 'All'],
  ['Latvia', 'LV'],
  ['Estonia', 'EE'],
  ['Lithuania', 'LT'],
  ['Hungary', 'HU'],
];

const allLocationsData: IAllLocationsData[] = [
  {
    ownerName: 'National Post',
    marker: 'national.svg',
    data: commonNationalPost,
  },
  {
    ownerName: 'Omniva',
    marker: 'omniva.svg',
    data: commonOmnivaPost,
  },
  {
    ownerName: 'Venipak',
    marker: 'venipak.svg',
    data: commonVenipakPost,
  },
  { ownerName: 'uDrop', marker: 'uDrop.svg', data: commonuDropPost },
  { ownerName: 'DPD', marker: 'dpd.svg', data: commonDPDPost },
  { ownerName: 'Stokker', marker: 'stokker.svg', data: commonStokker },
  { ownerName: 'LT-post', marker: 'lt.svg', data: commonLVPost },
];

export { cities, countries, allLocationsData };

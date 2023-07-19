import {
  locationsNationalPost,
  locationsOmniva,
  locationsVenipak,
  locationsuDrop,
  locationsDPD,
  locationLVPost,
  locationsDHL,
  locationsStokker,
  locationsBudbee,
  locationsGLS,
  locationsSameDay,
  locationsGLSGermany,
  locationsPostNL,
  locationsInpost,
  locationsNacex,
} from '../../mock-data';
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
  ['Poland', 'PL'],
  ['Netherlands', 'NL'],
  ['Romania', 'RM'],
  ['Bulgaria', 'BG'],
  ['Germany', 'DE'],
  ['Spain', 'ES'],
];

const allLocationsData: IAllLocationsData[] = [
  {
    ownerName: 'National Post',
    marker: 'national.svg',
    data: locationsNationalPost,
  },
  {
    ownerName: 'Omniva',
    marker: 'omniva.svg',
    data: locationsOmniva,
  },
  {
    ownerName: 'Venipak',
    marker: 'venipak.svg',
    data: locationsVenipak,
  },
  { ownerName: 'uDrop', marker: 'uDrop.svg', data: locationsuDrop },
  { ownerName: 'DPD', marker: 'dpd.svg', data: locationsDPD },
  { ownerName: 'Stokker', marker: 'stokker.svg', data: locationsStokker },
  { ownerName: 'LT-post', marker: 'lt.svg', data: locationLVPost },
  { ownerName: 'DHL', marker: 'dhl.png', data: locationsDHL },
  { ownerName: 'budbee', marker: 'budbee.png', data: locationsBudbee },
  { ownerName: 'GLS', marker: 'GLS.svg', data: locationsGLS },
  { ownerName: 'same day', marker: 'sameday.png', data: locationsSameDay },
  { ownerName: 'GLS-G', marker: 'gls german.svg', data: locationsGLSGermany },
  { ownerName: 'Post-NL', marker: 'postnl.png', data: locationsPostNL },
  { ownerName: 'Inpost', marker: 'inpost.png', data: locationsInpost },
  { ownerName: 'Nacex', marker: 'NACEX.png', data: locationsNacex },
];

export { cities, countries, allLocationsData };

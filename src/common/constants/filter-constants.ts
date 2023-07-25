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
  // locationsInpost,
  locationsNacex,
  locationsGLSAustria,
  locationsGlsChzech,
  locationsBalíkoBOX,
  // locationsSlovakService,
  locationsPaketa,
  locationsFANBox,
  locationsGLSRomania,
  locationsPanduri,
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
  ['Bucuresti', 'Bucuresti'],
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
  ['Slovak Republic', 'SK'],
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
  // { ownerName: 'Inpost', marker: 'inpost.png', data: locationsInpost },
  { ownerName: 'Nacex', marker: 'NACEX.png', data: locationsNacex },
  {
    ownerName: 'GLS-Austria',
    marker: 'gls-Austria.png',
    data: locationsGLSAustria,
  },
  {
    ownerName: 'GLS-Chzech',
    marker: 'gls-Austria.png',
    data: locationsGlsChzech,
  },
  { ownerName: 'BalikoBOX', marker: 'BalíkoBOX.jpg', data: locationsBalíkoBOX },
  { ownerName: 'Paketa', marker: 'paketa.svg', data: locationsPaketa },
  { ownerName: 'FANbox', marker: 'FANbox.png', data: locationsFANBox },
  { ownerName: 'GLS Romania', marker: 'GLS.svg', data: locationsGLSRomania },
  {
    ownerName: 'Posta Panduri',
    marker: 'Panduri.png',
    data: locationsPanduri,
  },

  // {
  //   ownerName: 'SlovakService',
  //   marker: 'slovakparcel.svg',
  //   data: locationsSlovakService,
  // },
];

const allOwners = allLocationsData.map((loc) => loc.ownerName);

export { cities, countries, allLocationsData, allOwners };

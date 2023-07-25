import locationsBalíkoBOX from './BalíkoBOX.json';
import locationsBudbee from './budbee.json';
import locationsDHL from './DHL.json';
import locationsDPD from './DPD.json';
import locationsFANBox from './FANbox.json';
import locationsGLSAustria from './GLS-Austria.json';
import locationsGLSGermany from './GLS-G.json';
import locationsGLSRomania from './GLS-RM.json';
import locationsGLS from './GLS.json';
import locationsGlsChzech from './GLSChzech.json';
import locationsInpost from './inpost.json';
import locationLVPost from './LV-post.json';
import locationsNacex from './Nacex.json';
import locationsNationalPost from './NationalPost.json';
import locationsOmniva from './Omniva.json';
import locationsPaketa from './paketa.json';
import locationsPostNL from './postNL.json';
import locationsSameDay from './sameday.json';
import locationsSlovakService from './SlovakService.json';
import locationsuDrop from './uDrop.json';
import locationsVenipak from './Venipak.json';
import { CommonLocation } from '../common/types';

const locationsStokker: CommonLocation[] = [
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

export {
  locationsNationalPost,
  locationsOmniva,
  locationsVenipak,
  locationsuDrop,
  locationsDPD,
  locationLVPost,
  locationsGLS,
  locationsDHL,
  locationsStokker,
  locationsBudbee,
  locationsSameDay,
  locationsGLSGermany,
  locationsPostNL,
  locationsInpost,
  locationsNacex,
  locationsGLSAustria,
  locationsGlsChzech,
  locationsBalíkoBOX,
  locationsSlovakService,
  locationsPaketa,
  locationsFANBox,
  locationsGLSRomania,
};

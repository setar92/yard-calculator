import { locationsOmniva } from '../../mock-data';
import { IAllLocationsData, OmnivaLocation, CommonLocation } from '../types';
function mapOmnivaLocation(location: OmnivaLocation): CommonLocation {
  let city = 'null';
  if (location.town === 'Vilniaus m.') {
    city = 'Vilnius';
  }
  if (location.town === 'Kauno m.') {
    city = 'Kaunas';
  }
  if (location.town === 'Klaipėdos m.') {
    city = 'Klaip\u0117da';
  }

  return {
    name: location.NAME,
    latitude: parseFloat(location.Y_KOORDINAAT),
    longitude: parseFloat(location.X_KOORDINAAT),
    country: location.country_id,
    iconUrl: 'sasi.webp',
    owner: 'Omniva',
    address: location.title,
    city: [location.A1_NIMI, location.A2_NIMI, city],
  };
}

const commonOmnivaPost = locationsOmniva
  .filter((loc) => loc.TYPE === '0')
  .map((loc) => mapOmnivaLocation(loc));

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
  { ownerName: 'Omniva', marker: 'Omniva.webp', data: commonOmnivaPost },
];

export { cities, countries, allLocationsData };

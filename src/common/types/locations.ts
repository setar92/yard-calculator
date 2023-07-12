type Owner = 'Omniva';

interface OmnivaLocation {
  id: string;
  ZIP: string;
  NAME: string;
  TYPE: string;
  A1_NIMI: string | null;
  A2_NIMI: string | null;
  A3_NIMI: string | null;
  A4_NIMI: string | null;
  A5_NIMI: string | null;
  A6_NIMI: string | null;
  A7_NIMI: string | null;
  A8_NIMI: string | null;
  X_KOORDINAAT: string;
  Y_KOORDINAAT: string;
  SERVICE_HOURS: string;
  TEMP_SERVICE_HOURS: string;
  TEMP_SERVICE_HOURS_UNTIL: string | null;
  TEMP_SERVICE_HOURS_2: string;
  TEMP_SERVICE_HOURS_2_UNTIL: string | null;
  MODIFIED: string;
  comments: string;
  picture: string;
  import_type: string;
  country_id: string;
  type_id: string;
  comment_est: string;
  comment_rus: string;
  comment_eng: string;
  comment_lav: string;
  comment_lit: string;
  SERVICEPOINT_OVERLOAD: string;
  is_new_pm: string;
  title: string;
  town: string;
  lng: string;
  lat: string;
  description: string;
  type_array: string;
  long_waiting: boolean;
  real_type: string;
}
interface CommonLocation {
  name: string;
  latitude: number;
  longitude: number;
  city: Array<string | null>;
  country: string;
  owner: Owner;
  iconUrl: string;
  address: string;
  img?: string;
}

interface IAllLocationsData {
  ownerName: string;
  marker: string;
  data: CommonLocation[];
}

interface CommonLocation {
  name: string;
  latitude: number;
  longitude: number;
  city: Array<string | null>;
  country: string;
  owner: Owner;
  iconUrl: string;
  address: string;
  img?: string;
}

export type { IAllLocationsData, OmnivaLocation, CommonLocation };

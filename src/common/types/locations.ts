interface CommonLocation {
  name: string;
  latitude: number;
  longitude: number;
  city: Array<string | null>;
  country: string;
  owner: string;
  iconUrl: string;
  address: string;
  img?: string;
}

interface IAllLocationsData {
  ownerName: string;
  marker: string;
  data: CommonLocation[];
}

export type { CommonLocation, IAllLocationsData };

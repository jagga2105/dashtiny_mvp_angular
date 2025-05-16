export interface CityData {
  name: string;
  city: string;
  country: string;
  countryCode?: string;
  region?: string;
  searchText?: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
  parent?: string;
  type?: string;
}

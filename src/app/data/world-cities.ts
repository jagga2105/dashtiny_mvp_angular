export interface CityData {
  city: string;
  country: string;
  region?: string;
  searchText?: string; // For better search matching
}

export const WORLD_CITIES: CityData[] = [
  // North America
  { city: 'New York', country: 'USA', region: 'North America', searchText: 'new york nyc big apple united states' },
  { city: 'Los Angeles', country: 'USA', region: 'North America' },
  { city: 'Chicago', country: 'USA', region: 'North America' },
  { city: 'Toronto', country: 'Canada', region: 'North America' },
  { city: 'Vancouver', country: 'Canada', region: 'North America' },
  { city: 'Mexico City', country: 'Mexico', region: 'North America' },
  
  // Europe
  { city: 'London', country: 'UK', region: 'Europe', searchText: 'london united kingdom britain england' },
  { city: 'Paris', country: 'France', region: 'Europe' },
  { city: 'Rome', country: 'Italy', region: 'Europe' },
  { city: 'Barcelona', country: 'Spain', region: 'Europe' },
  { city: 'Amsterdam', country: 'Netherlands', region: 'Europe' },
  { city: 'Berlin', country: 'Germany', region: 'Europe' },
  { city: 'Prague', country: 'Czech Republic', region: 'Europe' },
  { city: 'Vienna', country: 'Austria', region: 'Europe' },
  { city: 'Madrid', country: 'Spain', region: 'Europe' },
  
  // Asia
  { city: 'Tokyo', country: 'Japan', region: 'Asia' },
  { city: 'Singapore', country: 'Singapore', region: 'Asia' },
  { city: 'Bangkok', country: 'Thailand', region: 'Asia' },
  { city: 'Dubai', country: 'UAE', region: 'Asia' },
  { city: 'Seoul', country: 'South Korea', region: 'Asia' },
  { city: 'Mumbai', country: 'India', region: 'Asia', searchText: 'mumbai bombay india' },
  { city: 'Delhi', country: 'India', region: 'Asia', searchText: 'delhi new delhi india' },
  { city: 'Shanghai', country: 'China', region: 'Asia' },
  { city: 'Beijing', country: 'China', region: 'Asia' },
  { city: 'Hong Kong', country: 'China', region: 'Asia' },
  
  // Rest of data available at: https://github.com/lutangar/cities.json
  // Note: You can import the full dataset from there
];

// Helper function to search cities
export function searchCities(query: string): CityData[] {
  const searchTerm = query.toLowerCase().trim();
  return WORLD_CITIES.filter(city => {
    const searchString = [
      city.city,
      city.country,
      city.region,
      city.searchText
    ].filter(Boolean).join(' ').toLowerCase();
    
    return searchString.includes(searchTerm);
  });
}

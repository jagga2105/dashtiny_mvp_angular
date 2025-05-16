export interface Location {
  name: string;
  code?: string;
  type: 'continent' | 'country' | 'state' | 'city' | 'place';
  searchText?: string[];
  children?: Location[];
  coordinates?: {
    lat: number;
    lng: number;
  };
  timezone?: string;
  popular?: boolean;
  info?: {
    population?: number;
    language?: string[];
    currency?: string;
    description?: string;
  };
}

export const WORLD_LOCATIONS: Location[] = [
  {
    name: 'Asia',
    type: 'continent',
    children: [
      {
        name: 'India',
        code: 'IN',
        type: 'country',
        info: {
          language: ['Hindi', 'English'],
          currency: 'INR',
          population: 1380004385
        },
        children: [
          {
            name: 'Maharashtra',
            type: 'state',
            children: [
              {
                name: 'Mumbai',
                type: 'city',
                popular: true,
                searchText: ['bombay', 'financial capital', 'bollywood'],
                coordinates: { lat: 19.0760, lng: 72.8777 },
                children: [
                  { name: 'Gateway of India', type: 'place', searchText: ['monument', 'tourist'] },
                  { name: 'Marine Drive', type: 'place', searchText: ['queens necklace', 'beach'] },
                  { name: 'Juhu Beach', type: 'place', searchText: ['beach', 'celebrity homes'] },
                  { name: 'Siddhivinayak Temple', type: 'place', searchText: ['temple', 'religious'] },
                  { name: 'Colaba Causeway', type: 'place', searchText: ['shopping', 'market'] }
                ]
              },
              {
                name: 'Pune',
                type: 'city',
                coordinates: { lat: 18.5204, lng: 73.8567 },
                children: [
                  { name: 'Shaniwar Wada', type: 'place', searchText: ['fort', 'history'] },
                  { name: 'Aga Khan Palace', type: 'place', searchText: ['gandhi', 'history'] },
                  { name: 'Sinhagad Fort', type: 'place', searchText: ['trek', 'fort'] }
                ]
              },
              {
                name: 'Aurangabad',
                type: 'city',
                children: [
                  { name: 'Ajanta Caves', type: 'place', searchText: ['unesco', 'buddhist'] },
                  { name: 'Ellora Caves', type: 'place', searchText: ['unesco', 'ancient'] }
                ]
              }
            ]
          },
          {
            name: 'Delhi',
            type: 'state',
            children: [
              {
                name: 'New Delhi',
                type: 'city',
                popular: true,
                coordinates: { lat: 28.6139, lng: 77.2090 },
                children: [
                  { name: 'India Gate', type: 'place', searchText: ['monument', 'war memorial'] },
                  { name: 'Red Fort', type: 'place', searchText: ['mughal', 'history'] },
                  { name: 'Qutub Minar', type: 'place', searchText: ['unesco', 'tower'] },
                  { name: 'Humayun Tomb', type: 'place', searchText: ['mughal', 'architecture'] },
                  { name: 'Chandni Chowk', type: 'place', searchText: ['market', 'food', 'shopping'] }
                ]
              }
            ]
          },
          {
            name: 'Kerala',
            type: 'state',
            children: [
              {
                name: 'Kochi',
                type: 'city',
                coordinates: { lat: 9.9312, lng: 76.2673 },
                children: [
                  { name: 'Fort Kochi', type: 'place', searchText: ['beach', 'history'] },
                  { name: 'Chinese Fishing Nets', type: 'place', searchText: ['iconic', 'fishing'] }
                ]
              },
              {
                name: 'Munnar',
                type: 'city',
                searchText: ['hill station', 'tea plantations'],
                coordinates: { lat: 10.0889, lng: 77.0595 },
                children: [
                  { name: 'Tea Gardens', type: 'place' },
                  { name: 'Eravikulam National Park', type: 'place', searchText: ['wildlife', 'nature'] }
                ]
              },
              {
                name: 'Alleppey',
                type: 'city',
                searchText: ['backwaters', 'venice of the east'],
                children: [
                  { name: 'Backwaters', type: 'place', searchText: ['houseboat', 'kerala'] },
                  { name: 'Alappuzha Beach', type: 'place', searchText: ['beach', 'sunset'] }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

// Create a flat array of searchable locations
export const SEARCHABLE_LOCATIONS = flattenLocations(WORLD_LOCATIONS);

function flattenLocations(locations: Location[]): Location[] {
  const flattened: Location[] = [];
  
  function traverse(loc: Location, parents: string[] = []) {
    // Add breadcrumb path
    const path = [...parents, loc.name];
    
    // Add to flattened array if it's a city or place
    if (loc.type === 'city' || loc.type === 'place') {
      flattened.push({
        ...loc,
        searchText: [
          ...(loc.searchText || []),
          ...path,
          path.join(', ')
        ]
      });
    }
    
    // Traverse children
    if (loc.children) {
      loc.children.forEach(child => traverse(child, path));
    }
  }
  
  locations.forEach(loc => traverse(loc));
  return flattened;
}

// Search function
export function searchLocations(query: string): Location[] {
  const searchTerm = query.toLowerCase().trim();
  return SEARCHABLE_LOCATIONS.filter(location => {
    const searchable = [
      location.name,
      ...(location.searchText || [])
    ].join(' ').toLowerCase();
    
    return searchable.includes(searchTerm);
  });
}

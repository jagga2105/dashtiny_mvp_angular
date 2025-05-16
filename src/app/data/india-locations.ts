import { Location } from './world-locations';

export const INDIA_LOCATIONS: Location = {
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
      searchText: ['marathi', 'western india', 'bollywood'],
      children: [
        {
          name: 'Mumbai',
          type: 'city',
          popular: true,
          searchText: ['bombay', 'financial capital', 'bollywood city'],
          coordinates: { lat: 19.0760, lng: 72.8777 },
          children: [
            { name: 'Gateway of India', type: 'place', searchText: ['monument', 'tourist', 'colaba'] },
            { name: 'Marine Drive', type: 'place', searchText: ['queens necklace', 'beach', 'chowpatty'] },
            { name: 'Juhu Beach', type: 'place', searchText: ['beach', 'celebrity homes', 'food'] },
            { name: 'Bandra-Worli Sea Link', type: 'place', searchText: ['bridge', 'architecture'] },
            { name: 'Elephanta Caves', type: 'place', searchText: ['unesco', 'heritage', 'island'] },
            { name: 'Dharavi', type: 'place', searchText: ['slum tours', 'industry', 'real estate'] },
            { name: 'Colaba Causeway', type: 'place', searchText: ['shopping', 'street market', 'colonial'] },
            { name: 'Haji Ali Dargah', type: 'place', searchText: ['mosque', 'sea shrine', 'pilgrimage'] },
            { name: 'Film City', type: 'place', searchText: ['bollywood', 'studios', 'film shooting'] },
            { name: 'Siddhivinayak Temple', type: 'place', searchText: ['ganesh', 'religious', 'architecture'] },
            { name: 'Prince of Wales Museum', type: 'place', searchText: ['chhatrapati shivaji', 'art', 'history'] }
          ]
        },
        {
          name: 'Pune',
          type: 'city',
          coordinates: { lat: 18.5204, lng: 73.8567 },
          children: [
            { name: 'Shaniwar Wada', type: 'place', searchText: ['fort', 'peshwa', 'history'] },
            { name: 'Osho Ashram', type: 'place', searchText: ['meditation', 'spiritual'] },
            { name: 'Aga Khan Palace', type: 'place', searchText: ['gandhi', 'freedom struggle'] }
          ]
        },
        {
          name: 'Nagpur',
          type: 'city',
          searchText: ['orange city'],
          children: [
            { name: 'Zero Mile Marker', type: 'place' },
            { name: 'Deekshabhoomi', type: 'place', searchText: ['buddhist', 'ambedkar'] }
          ]
        },
        {
          name: 'Aurangabad',
          type: 'city',
          coordinates: { lat: 19.8762, lng: 75.3433 },
          searchText: ['ajanta', 'ellora', 'historical'],
          children: [
            { name: 'Ajanta Caves', type: 'place', searchText: ['unesco', 'buddhist', 'paintings'] },
            { name: 'Ellora Caves', type: 'place', searchText: ['unesco', 'rock cut', 'temples'] },
            { name: 'Bibi Ka Maqbara', type: 'place', searchText: ['taj of deccan', 'mughal', 'architecture'] }
          ]
        },
        {
          name: 'Nashik',
          type: 'city',
          coordinates: { lat: 20.0059, lng: 73.7902 },
          searchText: ['wine capital', 'kumbh mela', 'godavari'],
          children: [
            { name: 'Sula Vineyards', type: 'place', searchText: ['wine', 'tourism', 'vineyard'] },
            { name: 'Trimbakeshwar Temple', type: 'place', searchText: ['jyotirlinga', 'religious', 'ancient'] },
            { name: 'Panchavati', type: 'place', searchText: ['ramayana', 'religious', 'historic'] }
          ]
        },
        {
          name: 'Kolhapur',
          type: 'city',
          coordinates: { lat: 16.7050, lng: 74.2433 },
          searchText: ['mahalaxmi', 'wrestling', 'cuisine'],
          children: [
            { name: 'Mahalaxmi Temple', type: 'place', searchText: ['shakti peeth', 'religious'] },
            { name: 'New Palace', type: 'place', searchText: ['museum', 'architecture', 'royal'] },
            { name: 'Panhala Fort', type: 'place', searchText: ['historic', 'maratha', 'trekking'] }
          ]
        },
        {
          name: 'Mahabaleshwar',
          type: 'city',
          coordinates: { lat: 17.9307, lng: 73.6477 },
          searchText: ['hill station', 'strawberries', 'viewpoints'],
          children: [
            { name: 'Wilson Point', type: 'place', searchText: ['sunrise', 'highest point', 'viewpoint'] },
            { name: 'Venna Lake', type: 'place', searchText: ['boating', 'picnic', 'recreation'] },
            { name: 'Pratapgad Fort', type: 'place', searchText: ['historic', 'maratha', 'afzal khan'] }
          ]
        },
        {
          name: 'Lonavala',
          type: 'city',
          coordinates: { lat: 18.7546, lng: 73.4062 },
          searchText: ['hill station', 'monsoon', 'weekends'],
          children: [
            { name: 'Bhushi Dam', type: 'place', searchText: ['waterfall', 'picnic', 'monsoon'] },
            { name: 'Lohagad Fort', type: 'place', searchText: ['trek', 'historic', 'monsoon'] },
            { name: 'Karla Caves', type: 'place', searchText: ['buddhist', 'ancient', 'architecture'] }
          ]
        },
        {
          name: 'Ahmednagar',
          type: 'city',
          coordinates: { lat: 19.0948, lng: 74.7483 },
          searchText: ['sugar belt', 'historical', 'pilgrimage'],
          children: [
            { name: 'Shirdi', type: 'place', searchText: ['sai baba', 'temple', 'pilgrimage'] },
            { name: 'Bhandardara', type: 'place', searchText: ['dam', 'camping', 'waterfall'] }
          ]
        },
        {
          name: 'Solapur',
          type: 'city',
          coordinates: { lat: 17.6599, lng: 75.9064 },
          searchText: ['textile', 'temples', 'industrial'],
          children: [
            { name: 'Pandharpur', type: 'place', searchText: ['vitthal temple', 'pilgrimage', 'wari'] }
          ]
        },
        {
          name: 'Ratnagiri',
          type: 'city',
          coordinates: { lat: 16.9902, lng: 73.3120 },
          searchText: ['konkan', 'mangoes', 'coastal'],
          children: [
            { name: 'Ganpatipule Beach', type: 'place', searchText: ['beach', 'temple', 'water sports'] }
          ]
        }
      ]
    },
    {
      name: 'Karnataka',
      type: 'state',
      children: [
        {
          name: 'Bengaluru',
          type: 'city',
          popular: true,
          searchText: ['bangalore', 'silicon valley', 'garden city'],
          coordinates: { lat: 12.9716, lng: 77.5946 },
          children: [
            { name: 'Cubbon Park', type: 'place', searchText: ['garden', 'nature'] },
            { name: 'Lalbagh', type: 'place', searchText: ['botanical', 'garden', 'glass house'] },
            { name: 'MG Road', type: 'place', searchText: ['shopping', 'entertainment'] },
            { name: 'Vidhana Soudha', type: 'place', searchText: ['government', 'architecture'] }
          ]
        },
        {
          name: 'Mysuru',
          type: 'city',
          searchText: ['mysore', 'cultural capital'],
          children: [
            { name: 'Mysore Palace', type: 'place', searchText: ['royal', 'heritage'] },
            { name: 'Chamundi Hills', type: 'place', searchText: ['temple', 'viewpoint'] }
          ]
        },
        {
          name: 'Hampi',
          type: 'city',
          popular: true,
          coordinates: { lat: 15.3350, lng: 76.4600 },
          searchText: ['unesco', 'vijayanagara', 'ruins'],
          children: [
            { name: 'Virupaksha Temple', type: 'place', searchText: ['temple', 'ancient', 'active worship'] },
            { name: 'Vittala Temple', type: 'place', searchText: ['stone chariot', 'architecture', 'musical pillars'] },
            { name: 'Hippie Island', type: 'place', searchText: ['hampi island', 'virupapur gadde'] }
          ]
        },
        {
          name: 'Coorg',
          type: 'city',
          searchText: ['kodagu', 'coffee', 'scotland of india'],
          coordinates: { lat: 12.4244, lng: 75.7382 },
          children: [
            { name: 'Abbey Falls', type: 'place', searchText: ['waterfall', 'nature'] },
            { name: 'Raja Seat', type: 'place', searchText: ['viewpoint', 'sunset'] },
            { name: 'Talacauvery', type: 'place', searchText: ['temple', 'river origin', 'cauvery'] }
          ]
        },
        {
          name: 'Udupi',
          type: 'city',
          coordinates: { lat: 13.3409, lng: 74.7421 },
          searchText: ['temple town', 'beaches', 'cuisine'],
          children: [
            { name: 'Krishna Temple', type: 'place', searchText: ['temple', 'religious', 'historic'] },
            { name: 'Malpe Beach', type: 'place', searchText: ['beach', 'water sports', 'islands'] }
          ]
        },
        {
          name: 'Chikmagalur',
          type: 'city',
          coordinates: { lat: 13.3161, lng: 75.7720 },
          searchText: ['coffee', 'western ghats', 'trekking'],
          children: [
            { name: 'Mullayanagiri', type: 'place', searchText: ['peak', 'trekking', 'highest'] },
            { name: 'Coffee Estates', type: 'place', searchText: ['plantation', 'scenic', 'tourism'] }
          ]
        }
      ]
    },
    {
      name: 'Uttar Pradesh',
      type: 'state',
      children: [
        {
          name: 'Agra',
          type: 'city',
          popular: true,
          coordinates: { lat: 27.1767, lng: 78.0081 },
          children: [
            { name: 'Taj Mahal', type: 'place', searchText: ['unesco', 'wonder of world', 'monument', 'mughal'] },
            { name: 'Agra Fort', type: 'place', searchText: ['unesco', 'red fort', 'mughal architecture'] },
            { name: 'Fatehpur Sikri', type: 'place', searchText: ['ghost city', 'unesco', 'akbar'] }
          ]
        },
        {
          name: 'Varanasi',
          type: 'city',
          popular: true,
          searchText: ['banaras', 'kashi', 'holy city'],
          coordinates: { lat: 25.3176, lng: 82.9739 },
          children: [
            { name: 'Dashashwamedh Ghat', type: 'place', searchText: ['ganga aarti', 'religious'] },
            { name: 'Kashi Vishwanath Temple', type: 'place', searchText: ['temple', 'jyotirlinga'] },
            { name: 'Sarnath', type: 'place', searchText: ['buddhist', 'deer park', 'buddha'] }
          ]
        },
        {
          name: 'Lucknow',
          type: 'city',
          coordinates: { lat: 26.8467, lng: 80.9462 },
          searchText: ['nawabi', 'city of nawabs', 'kebabs'],
          children: [
            { name: 'Bara Imambara', type: 'place', searchText: ['architecture', 'bhulbhulaiya'] },
            { name: 'Rumi Darwaza', type: 'place', searchText: ['gateway', 'lucknow gate'] },
            { name: 'Hazratganj', type: 'place', searchText: ['market', 'shopping', 'chowk'] }
          ]
        }
      ]
    },
    {
      name: 'Punjab',
      type: 'state',
      children: [
        {
          name: 'Amritsar',
          type: 'city',
          popular: true,
          coordinates: { lat: 31.6340, lng: 74.8723 },
          children: [
            { name: 'Golden Temple', type: 'place', searchText: ['harmandir sahib', 'sikh', 'gurudwara'] },
            { name: 'Jallianwala Bagh', type: 'place', searchText: ['memorial', 'freedom struggle'] },
            { name: 'Wagah Border', type: 'place', searchText: ['india pakistan border', 'beating retreat'] }
          ]
        },
        {
          name: 'Chandigarh',
          type: 'city',
          coordinates: { lat: 30.7333, lng: 76.7794 },
          searchText: ['planned city', 'le corbusier'],
          children: [
            { name: 'Rock Garden', type: 'place', searchText: ['nek chand', 'sculpture park'] },
            { name: 'Sukhna Lake', type: 'place', searchText: ['artificial lake', 'boating'] },
            { name: 'Capitol Complex', type: 'place', searchText: ['unesco', 'architecture'] }
          ]
        }
      ]
    },
    {
      name: 'Himachal Pradesh',
      type: 'state',
      children: [
        {
          name: 'Shimla',
          type: 'city',
          popular: true,
          coordinates: { lat: 31.1048, lng: 77.1734 },
          searchText: ['queen of hills', 'summer capital'],
          children: [
            { name: 'Mall Road', type: 'place', searchText: ['shopping', 'ridge', 'colonial'] },
            { name: 'Jakhu Temple', type: 'place', searchText: ['hanuman', 'temple', 'monkey point'] },
            { name: 'Kufri', type: 'place', searchText: ['snow', 'skiing', 'winter sports'] }
          ]
        },
        {
          name: 'Manali',
          type: 'city',
          popular: true,
          coordinates: { lat: 32.2396, lng: 77.1887 },
          searchText: ['honeymoon', 'adventure', 'himalayan'],
          children: [
            { name: 'Rohtang Pass', type: 'place', searchText: ['snow', 'adventure', 'atal tunnel'] },
            { name: 'Solang Valley', type: 'place', searchText: ['skiing', 'paragliding', 'adventure sports'] },
            { name: 'Hadimba Temple', type: 'place', searchText: ['temple', 'architecture', 'wooden'] }
          ]
        }
      ]
    },
    {
      name: 'Rajasthan',
      type: 'state',
      children: [
        {
          name: 'Jaipur',
          type: 'city',
          popular: true,
          coordinates: { lat: 26.9124, lng: 75.7873 },
          searchText: ['pink city', 'royal', 'capital'],
          children: [
            { name: 'Hawa Mahal', type: 'place', searchText: ['palace of winds', 'architecture'] },
            { name: 'Amber Fort', type: 'place', searchText: ['amer fort', 'palace', 'heritage'] },
            { name: 'City Palace', type: 'place', searchText: ['museum', 'royal residence', 'architecture'] },
            { name: 'Jantar Mantar', type: 'place', searchText: ['unesco', 'observatory', 'astronomy'] },
            { name: 'Albert Hall Museum', type: 'place', searchText: ['artifacts', 'oldest museum', 'architecture'] },
            { name: 'Nahargarh Fort', type: 'place', searchText: ['sunset point', 'heritage', 'panoramic view'] },
            { name: 'Jal Mahal', type: 'place', searchText: ['water palace', 'man sagar lake', 'architecture'] },
            { name: 'Birla Mandir', type: 'place', searchText: ['marble temple', 'religious', 'modern'] },
            { name: 'Central Park', type: 'place', searchText: ['garden', 'jogging track', 'relaxation'] },
            { name: 'World Trade Park', type: 'place', searchText: ['shopping mall', 'entertainment', 'modern'] }
          ]
        },
        {
          name: 'Udaipur',
          type: 'city',
          popular: true,
          coordinates: { lat: 24.5854, lng: 73.7125 },
          searchText: ['city of lakes', 'venice of east'],
          children: [
            { name: 'Lake Palace', type: 'place', searchText: ['taj lake palace', 'luxury', 'hotel'] },
            { name: 'City Palace', type: 'place', searchText: ['museum', 'mewar', 'architecture'] },
            { name: 'Lake Pichola', type: 'place', searchText: ['artificial lake', 'boating', 'sunset'] }
          ]
        }
      ]
    },
    {
      name: 'Tamil Nadu',
      type: 'state',
      children: [
        {
          name: 'Chennai',
          type: 'city',
          popular: true,
          coordinates: { lat: 13.0827, lng: 80.2707 },
          searchText: ['madras', 'capital', 'metropolitan'],
          children: [
            { name: 'Marina Beach', type: 'place', searchText: ['beach', 'longest beach', 'sunrise'] },
            { name: 'Kapaleeshwarar Temple', type: 'place', searchText: ['temple', 'dravidian', 'mylapore'] },
            { name: 'Fort St. George', type: 'place', searchText: ['british', 'colonial', 'history'] }
          ]
        },
        {
          name: 'Madurai',
          type: 'city',
          popular: true,
          coordinates: { lat: 9.9252, lng: 78.1198 },
          searchText: ['temple city', 'jasmine city'],
          children: [
            { name: 'Meenakshi Amman Temple', type: 'place', searchText: ['temple', 'architecture', 'ancient'] },
            { name: 'Thirumalai Nayakkar Palace', type: 'place', searchText: ['palace', 'heritage', 'history'] }
          ]
        },
        {
          name: 'Ooty',
          type: 'city',
          searchText: ['udhagamandalam', 'hill station', 'queen of hills'],
          coordinates: { lat: 11.4102, lng: 76.6950 },
          children: [
            { name: 'Botanical Gardens', type: 'place', searchText: ['garden', 'flowers', 'nature'] },
            { name: 'Ooty Lake', type: 'place', searchText: ['boating', 'artificial lake'] },
            { name: 'Nilgiri Mountain Railway', type: 'place', searchText: ['unesco', 'toy train', 'heritage'] }
          ]
        }
      ]
    },
    {
      name: 'Andhra Pradesh',
      type: 'state',
      searchText: ['telugu', 'coastal andhra', 'rayalaseema'],
      children: [
        {
          name: 'Adilabad',
          type: 'city',
          coordinates: { lat: 19.6667, lng: 78.5333 }
        },
        {
          name: 'Anantapur',
          type: 'city',
          coordinates: { lat: 14.6833, lng: 77.6000 }
        },
        {
          name: 'Chittoor',
          type: 'city',
          coordinates: { lat: 13.2167, lng: 79.1000 }
        },
        {
          name: 'East Godavari',
          type: 'city',
          coordinates: { lat: 17.0000, lng: 82.2000 }
        },
        {
          name: 'Guntur',
          type: 'city',
          coordinates: { lat: 16.3000, lng: 80.4500 }
        },
        {
          name: 'Hyderabad',
          type: 'city',
          coordinates: { lat: 17.3850, lng: 78.4867 }
        },
        {
          name: 'Kadapa',
          type: 'city',
          coordinates: { lat: 14.4667, lng: 78.8333 }
        },
        {
          name: 'Karimnagar',
          type: 'city',
          coordinates: { lat: 18.4333, lng: 79.1500 }
        },
        {
          name: 'Khammam',
          type: 'city',
          coordinates: { lat: 17.2500, lng: 80.1500 }
        },
        {
          name: 'Krishna',
          type: 'city',
          coordinates: { lat: 16.1667, lng: 81.1333 }
        },
        {
          name: 'Kurnool',
          type: 'city',
          coordinates: { lat: 15.8333, lng: 78.0333 }
        },
        {
          name: 'Mahbubnagar',
          type: 'city',
          coordinates: { lat: 16.7333, lng: 77.9833 }
        },
        {
          name: 'Medak',
          type: 'city',
          coordinates: { lat: 18.0500, lng: 78.2667 }
        },
        {
          name: 'Nalgonda',
          type: 'city',
          coordinates: { lat: 17.0500, lng: 79.2667 }
        },
        {
          name: 'Nellore',
          type: 'city',
          coordinates: { lat: 14.4333, lng: 79.9667 }
        },
        {
          name: 'Nizamabad',
          type: 'city',
          coordinates: { lat: 18.6667, lng: 78.1000 }
        },
        {
          name: 'Prakasam',
          type: 'city',
          coordinates: { lat: 15.5000, lng: 79.5000 }
        },
        {
          name: 'Rangareddi',
          type: 'city',
          coordinates: { lat: 17.3667, lng: 78.5167 }
        },
        {
          name: 'Srikakulam',
          type: 'city',
          coordinates: { lat: 18.3000, lng: 83.9000 }
        },
        {
          name: 'Visakhapatnam',
          type: 'city',
          popular: true,
          coordinates: { lat: 17.6868, lng: 83.2185 },
          children: [
            { name: 'RK Beach', type: 'place', searchText: ['beach', 'submarine museum'] },
            { name: 'Araku Valley', type: 'place', searchText: ['valley', 'coffee', 'tribal'] }
          ]
        },
        {
          name: 'Vizianagaram',
          type: 'city',
          coordinates: { lat: 18.1167, lng: 83.4167 }
        },
        {
          name: 'Warangal',
          type: 'city',
          coordinates: { lat: 18.0000, lng: 79.5833 }
        },
        {
          name: 'West Godavari',
          type: 'city',
          coordinates: { lat: 16.9167, lng: 81.3333 }
        }
      ]
    },
    {
      name: 'Telangana',
      type: 'state',
      children: [
        {
          name: 'Hyderabad',
          type: 'city',
          popular: true,
          coordinates: { lat: 17.3850, lng: 78.4867 },
          searchText: ['cyberabad', 'pearl city', 'biryani'],
          children: [
            { name: 'Charminar', type: 'place', searchText: ['monument', 'historic', 'old city'] },
            { name: 'Golconda Fort', type: 'place', searchText: ['fort', 'qutub shahi', 'history'] },
            { name: 'Ramoji Film City', type: 'place', searchText: ['studio', 'entertainment', 'tourism'] },
            { name: 'Hussain Sagar', type: 'place', searchText: ['lake', 'buddha statue', 'tank bund'] }
          ]
        },
        {
          name: 'Warangal',
          type: 'city',
          coordinates: { lat: 18.0000, lng: 79.5833 },
          children: [
            { name: 'Warangal Fort', type: 'place', searchText: ['fort', 'kakatiya', 'heritage'] },
            { name: 'Thousand Pillar Temple', type: 'place', searchText: ['temple', 'historic', 'architecture'] }
          ]
        }
      ]
    },
    {
      name: 'West Bengal',
      type: 'state',
      children: [
        {
          name: 'Kolkata',
          type: 'city',
          popular: true,
          coordinates: { lat: 22.5726, lng: 88.3639 },
          searchText: ['calcutta', 'city of joy', 'cultural capital'],
          children: [
            { name: 'Victoria Memorial', type: 'place', searchText: ['british', 'museum', 'architecture'] },
            { name: 'Howrah Bridge', type: 'place', searchText: ['iconic', 'hooghly river', 'cantilever'] },
            { name: 'Park Street', type: 'place', searchText: ['food', 'nightlife', 'shopping'] },
            { name: 'Dakshineswar Temple', type: 'place', searchText: ['kali temple', 'religious', 'ramakrishna'] }
          ]
        },
        {
          name: 'Darjeeling',
          type: 'city',
          popular: true,
          coordinates: { lat: 27.0410, lng: 88.2663 },
          searchText: ['hill station', 'tea gardens', 'himalayan'],
          children: [
            { name: 'Tiger Hill', type: 'place', searchText: ['sunrise', 'kanchenjunga view', 'mountains'] },
            { name: 'Toy Train', type: 'place', searchText: ['unesco', 'heritage railway', 'himalayan railway'] },
            { name: 'Tea Gardens', type: 'place', searchText: ['tea plantation', 'tea tourism'] }
          ]
        }
      ]
    },
    {
      name: 'Assam',
      type: 'state',
      children: [
        {
          name: 'Guwahati',
          type: 'city',
          popular: true,
          coordinates: { lat: 26.1445, lng: 91.7362 },
          children: [
            { name: 'Kamakhya Temple', type: 'place', searchText: ['shakti peeth', 'religious'] },
            { name: 'Brahmaputra River Cruise', type: 'place', searchText: ['river tourism', 'sunset cruise'] },
            { name: 'Umananda Temple', type: 'place', searchText: ['peacock island', 'shiva temple'] }
          ]
        },
        {
          name: 'Kaziranga',
          type: 'city',
          searchText: ['national park', 'rhino', 'wildlife'],
          coordinates: { lat: 26.5833, lng: 93.1700 },
          children: [
            { name: 'Kaziranga National Park', type: 'place', searchText: ['unesco', 'one horned rhino', 'safari'] },
            { name: 'Orchid Park', type: 'place', searchText: ['flowers', 'biodiversity'] }
          ]
        }
      ]
    },
    {
      name: 'Odisha',
      type: 'state',
      children: [
        {
          name: 'Bhubaneswar',
          type: 'city',
          coordinates: { lat: 20.2961, lng: 85.8245 },
          searchText: ['temple city', 'smart city'],
          children: [
            { name: 'Lingaraj Temple', type: 'place', searchText: ['ancient', 'architecture', 'shiva'] },
            { name: 'Udayagiri and Khandagiri Caves', type: 'place', searchText: ['jain', 'caves', 'history'] }
          ]
        },
        {
          name: 'Puri',
          type: 'city',
          popular: true,
          coordinates: { lat: 19.8135, lng: 85.8312 },
          children: [
            { name: 'Jagannath Temple', type: 'place', searchText: ['char dham', 'rath yatra', 'hindu'] },
            { name: 'Puri Beach', type: 'place', searchText: ['golden beach', 'sea beach'] }
          ]
        },
        {
          name: 'Konark',
          type: 'city',
          coordinates: { lat: 19.8877, lng: 86.0946 },
          children: [
            { name: 'Sun Temple', type: 'place', searchText: ['unesco', 'black pagoda', 'architecture'] },
            { name: 'Chandrabhaga Beach', type: 'place', searchText: ['blue flag beach', 'clean beach'] }
          ]
        }
      ]
    },
    {
      name: 'Bihar',
      type: 'state',
      children: [
        {
          name: 'Bodh Gaya',
          type: 'city',
          popular: true,
          coordinates: { lat: 24.6959, lng: 84.9911 },
          searchText: ['buddhist', 'pilgrimage', 'enlightenment'],
          children: [
            { name: 'Mahabodhi Temple', type: 'place', searchText: ['unesco', 'buddha', 'bodhi tree'] },
            { name: 'Great Buddha Statue', type: 'place', searchText: ['giant buddha', 'meditation park'] },
            { name: 'Thai Temple', type: 'place', searchText: ['buddhist', 'architecture'] }
          ]
        },
        {
          name: 'Nalanda',
          type: 'city',
          coordinates: { lat: 25.1368, lng: 85.4487 },
          searchText: ['ancient university', 'buddhist'],
          children: [
            { name: 'Nalanda University Ruins', type: 'place', searchText: ['unesco', 'ancient', 'education'] },
            { name: 'Archaeological Museum', type: 'place', searchText: ['artifacts', 'history'] }
          ]
        },
        {
          name: 'Patna',
          type: 'city',
          popular: true,
          coordinates: { lat: 25.5941, lng: 85.1376 },
          searchText: ['capital', 'historical', 'education'],
          children: [
            { name: 'Golghar', type: 'place', searchText: ['granary', 'viewpoint', 'british era'] },
            { name: 'Patna Museum', type: 'place', searchText: ['artifacts', 'history', 'culture'] },
            { name: 'Gandhi Maidan', type: 'place', searchText: ['public ground', 'events', 'gandhi statue'] },
            { name: 'Mahavir Mandir', type: 'place', searchText: ['temple', 'religious', 'hanuman'] }
          ]
        },
        {
          name: 'Gaya',
          type: 'city',
          coordinates: { lat: 24.7914, lng: 85.0002 },
          searchText: ['pilgrimage', 'hindu', 'pind daan'],
          children: [
            { name: 'Vishnupad Temple', type: 'place', searchText: ['hindu', 'vishnu footprint', 'sacred'] },
            { name: 'Dungeshwari Cave Temples', type: 'place', searchText: ['buddhist', 'meditation', 'caves'] }
          ]
        },
        {
          name: 'Bhagalpur',
          type: 'city',
          coordinates: { lat: 25.2425, lng: 86.9842 },
          searchText: ['silk city', 'education', 'historical'],
          children: [
            { name: 'Vikramshila Ruins', type: 'place', searchText: ['ancient university', 'buddhist', 'archaeological'] },
            { name: 'Mandar Hill', type: 'place', searchText: ['mythological', 'pilgrimage', 'rock carvings'] }
          ]
        },
        {
          name: 'Muzaffarpur',
          type: 'city',
          coordinates: { lat: 26.1209, lng: 85.3647 },
          searchText: ['litchi capital', 'educational hub'],
          children: [
            { name: 'Baba Garibnath Temple', type: 'place', searchText: ['religious', 'shiva', 'pilgrimage'] },
            { name: 'Jubba Sahni Park', type: 'place', searchText: ['recreation', 'garden', 'local'] }
          ]
        },
        {
          name: 'Darbhanga',
          type: 'city',
          coordinates: { lat: 26.1542, lng: 85.8918 },
          searchText: ['cultural center', 'mithila', 'historical'],
          children: [
            { name: 'Darbhanga Fort', type: 'place', searchText: ['historical', 'heritage', 'architecture'] },
            { name: 'DMCH', type: 'place', searchText: ['medical', 'education', 'historic building'] },
            { name: 'Chandradhari Museum', type: 'place', searchText: ['artifacts', 'culture', 'history'] }
          ]
        },
        {
          name: 'Rajgir',
          type: 'city',
          coordinates: { lat: 25.0180, lng: 85.4208 },
          searchText: ['buddhist', 'historical', 'pilgrimage'],
          children: [
            { name: 'Griddhakuta', type: 'place', searchText: ['vulture peak', 'buddha', 'meditation'] },
            { name: 'Vishwa Shanti Stupa', type: 'place', searchText: ['peace pagoda', 'japanese', 'buddhist'] },
            { name: 'Hot Springs', type: 'place', searchText: ['brahmakund', 'thermal', 'medicinal'] },
            { name: 'Cyclopean Wall', type: 'place', searchText: ['ancient', 'fortification', 'archaeological'] }
          ]
        },
        {
          name: 'Vaishali',
          type: 'city',
          coordinates: { lat: 25.9784, lng: 85.1336 },
          searchText: ['ancient', 'buddhist', 'jain'],
          children: [
            { name: 'Ashokan Pillar', type: 'place', searchText: ['ancient', 'lion capital', 'historical'] },
            { name: 'Buddha Relic Stupa', type: 'place', searchText: ['buddhist', 'sacred', 'archaeology'] },
            { name: 'Kundalpur Temple', type: 'place', searchText: ['jain', 'religious', 'architecture'] }
          ]
        }
      ]
    },
    {
      name: 'Sikkim',
      type: 'state',
      children: [
        {
          name: 'Gangtok',
          type: 'city',
          popular: true,
          coordinates: { lat: 27.3389, lng: 88.6065 },
          searchText: ['capital', 'himalayan', 'clean city'],
          children: [
            { name: 'Nathula Pass', type: 'place', searchText: ['indo-china border', 'silk route', 'high altitude'] },
            { name: 'Rumtek Monastery', type: 'place', searchText: ['buddhist', 'tibetan', 'monastery'] },
            { name: 'MG Marg', type: 'place', searchText: ['shopping', 'market', 'pedestrian'] }
          ]
        },
        {
          name: 'Pelling',
          type: 'city',
          coordinates: { lat: 27.3022, lng: 88.2359 },
          searchText: ['mountain view', 'peaceful'],
          children: [
            { name: 'Pemayangtse Monastery', type: 'place', searchText: ['buddhist', 'ancient'] },
            { name: 'Kanchenjunga Falls', type: 'place', searchText: ['waterfall', 'nature'] }
          ]
        }
      ]
    },
    {
      name: 'Gujarat',
      type: 'state',
      children: [
        {
          name: 'Ahmedabad',
          type: 'city',
          popular: true,
          coordinates: { lat: 23.0225, lng: 72.5714 },
          searchText: ['heritage city', 'business hub'],
          children: [
            { name: 'Sabarmati Ashram', type: 'place', searchText: ['gandhi', 'freedom struggle', 'history'] },
            { name: 'Kankaria Lake', type: 'place', searchText: ['recreational', 'entertainment'] }
          ]
        },
        {
          name: 'Vadodara',
          type: 'city',
          coordinates: { lat: 22.3072, lng: 73.1812 },
          children: [
            { name: 'Laxmi Vilas Palace', type: 'place', searchText: ['royal', 'heritage'] }
          ]
        }
      ]
    },
    {
      name: 'Madhya Pradesh',
      type: 'state',
      children: [
        {
          name: 'Bhopal',
          type: 'city',
          coordinates: { lat: 23.2599, lng: 77.4126 },
          children: [
            { name: 'Upper Lake', type: 'place', searchText: ['bhojtal', 'water sports'] }
          ]
        },
        {
          name: 'Khajuraho',
          type: 'city',
          popular: true,
          searchText: ['temples', 'unesco'],
          coordinates: { lat: 24.8318, lng: 79.9199 }
        }
      ]
    },
    {
      name: 'Goa',
      type: 'state',
      popular: true,
      children: [
        {
          name: 'Panaji',
          type: 'city',
          coordinates: { lat: 15.4909, lng: 73.8278 },
          children: [
            { name: 'Fontainhas', type: 'place', searchText: ['latin quarter', 'portuguese'] }
          ]
        },
        {
          name: 'Calangute',
          type: 'city',
          searchText: ['beach', 'tourism'],
          coordinates: { lat: 15.5440, lng: 73.7555 }
        }
      ]
    },
    {
      name: 'Kerala',
      type: 'state',
      searchText: ['gods own country', 'backwaters', 'ayurveda'],
      children: [
        {
          name: 'Thiruvananthapuram',
          type: 'city',
          coordinates: { lat: 8.5241, lng: 76.9366 },
          children: [
            { name: 'Kovalam Beach', type: 'place', searchText: ['beach', 'lighthouse', 'water sports'] },
            { name: 'Padmanabhaswamy Temple', type: 'place', searchText: ['temple', 'architecture', 'heritage'] },
            { name: 'Napier Museum', type: 'place', searchText: ['history', 'art', 'culture'] },
            { name: 'Shanghumukham Beach', type: 'place', searchText: ['sunset', 'beach', 'local'] }
          ]
        },
        {
          name: 'Kochi',
          type: 'city',
          popular: true,
          coordinates: { lat: 9.9312, lng: 76.2673 },
          searchText: ['queen of arabian sea', 'port city', 'commercial capital'],
          children: [
            { name: 'Fort Kochi', type: 'place', searchText: ['chinese nets', 'history', 'colonial'] },
            { name: 'Mattancherry Palace', type: 'place', searchText: ['dutch palace', 'museum', 'art'] },
            { name: 'Marine Drive', type: 'place', searchText: ['shopping', 'waterfront', 'sunset'] },
            { name: 'Jewish Synagogue', type: 'place', searchText: ['jew town', 'heritage', 'historic'] }
          ]
        },
        {
          name: 'Alappuzha',
          type: 'city',
          popular: true,
          coordinates: { lat: 9.4981, lng: 76.3388 },
          searchText: ['alleppey', 'venice of the east', 'backwaters'],
          children: [
            { name: 'Alleppey Beach', type: 'place', searchText: ['beach', 'pier', 'lighthouse'] },
            { name: 'Vembanad Lake', type: 'place', searchText: ['backwaters', 'houseboat', 'birds'] },
            { name: 'Marari Beach', type: 'place', searchText: ['pristine', 'quiet', 'fishing village'] },
            { name: 'Kuttanad Backwaters', type: 'place', searchText: ['village life', 'paddy fields', 'boat rides'] }
          ]
        },
        {
          name: 'Munnar',
          type: 'city',
          popular: true,
          coordinates: { lat: 10.0889, lng: 77.0595 },
          searchText: ['hill station', 'tea gardens', 'mountains'],
          children: [
            { name: 'Eravikulam National Park', type: 'place', searchText: ['nilgiri tahr', 'wildlife', 'trekking'] },
            { name: 'Tea Museum', type: 'place', searchText: ['tea processing', 'history', 'plantation'] },
            { name: 'Mattupetty Dam', type: 'place', searchText: ['boating', 'lake', 'scenic'] },
            { name: 'Top Station', type: 'place', searchText: ['viewpoint', 'highest point', 'western ghats'] },
            { name: 'Echo Point', type: 'place', searchText: ['lake', 'picnic', 'nature'] }
          ]
        },
        {
          name: 'Wayanad',
          type: 'city',
          coordinates: { lat: 11.6854, lng: 76.1320 },
          searchText: ['wildlife', 'hills', 'spices'],
          children: [
            { name: 'Edakkal Caves', type: 'place', searchText: ['prehistoric', 'trek', 'petroglyphs'] },
            { name: 'Banasura Sagar Dam', type: 'place', searchText: ['largest earth dam', 'islands', 'boating'] },
            { name: 'Chembra Peak', type: 'place', searchText: ['trekking', 'heart lake', 'camping'] },
            { name: 'Wayanad Wildlife Sanctuary', type: 'place', searchText: ['elephants', 'tigers', 'safari'] }
          ]
        },
        {
          name: 'Thekkady',
          type: 'city',
          coordinates: { lat: 9.5835, lng: 77.1830 },
          searchText: ['periyar', 'wildlife', 'spice gardens'],
          children: [
            { name: 'Periyar Tiger Reserve', type: 'place', searchText: ['wildlife', 'boat safari', 'tigers'] },
            { name: 'Spice Gardens', type: 'place', searchText: ['cardamom', 'pepper', 'plantation'] },
            { name: 'Kumily', type: 'place', searchText: ['spice market', 'shopping', 'local'] },
            { name: 'Mullaperiyar Dam', type: 'place', searchText: ['lake', 'british era', 'scenic'] }
          ]
        },
        {
          name: 'Varkala',
          type: 'city',
          coordinates: { lat: 8.7378, lng: 76.7163 },
          searchText: ['cliff beach', 'ayurveda', 'sunset'],
          children: [
            { name: 'Varkala Beach', type: 'place', searchText: ['cliff', 'swimming', 'water sports'] },
            { name: 'Varkala Cliff', type: 'place', searchText: ['shops', 'cafes', 'sunset view'] },
            { name: 'Janardanaswamy Temple', type: 'place', searchText: ['ancient', 'pilgrimage', 'architecture'] },
            { name: 'Kappil Beach', type: 'place', searchText: ['backwaters', 'serene', 'boat rides'] }
          ]
        },
        {
          name: 'Kozhikode',
          type: 'city',
          coordinates: { lat: 11.2588, lng: 75.7804 },
          searchText: ['calicut', 'malabar', 'beach'],
          children: [
            { name: 'Kappad Beach', type: 'place', searchText: ['historic', 'vasco da gama', 'beach'] },
            { name: 'Mananchira Square', type: 'place', searchText: ['historic', 'park', 'culture'] }
          ]
        },
        {
          name: 'Thrissur',
          type: 'city',
          coordinates: { lat: 10.5276, lng: 76.2144 },
          searchText: ['cultural capital', 'pooram', 'temples'],
          children: [
            { name: 'Vadakkumnathan Temple', type: 'place', searchText: ['shiva temple', 'architecture', 'historic'] },
            { name: 'Athirappilly Falls', type: 'place', searchText: ['waterfall', 'nature', 'scenic'] }
          ]
        }
      ]
    },
    {
      name: 'Jharkhand',
      type: 'state',
      children: [
        {
          name: 'Ranchi',
          type: 'city',
          coordinates: { lat: 23.3441, lng: 85.3096 },
          children: [
            { name: 'Dassam Falls', type: 'place', searchText: ['waterfall', 'nature'] }
          ]
        }
      ]
    },
    {
      name: 'Chhattisgarh',
      type: 'state',
      children: [
        {
          name: 'Raipur',
          type: 'city',
          coordinates: { lat: 21.2514, lng: 81.6296 }
        }
      ]
    },
    {
      name: 'Uttarakhand',
      type: 'state',
      searchText: ['devbhumi', 'himalayan', 'pilgrimage'],
      children: [
        {
          name: 'Rishikesh',
          type: 'city',
          popular: true,
          coordinates: { lat: 30.0869, lng: 78.2676 },
          searchText: ['yoga capital', 'spiritual', 'rafting'],
          children: [
            { name: 'Laxman Jhula', type: 'place', searchText: ['bridge', 'ganga', 'landmark'] },
            { name: 'Ram Jhula', type: 'place', searchText: ['bridge', 'temples', 'ashrams'] },
            { name: 'Triveni Ghat', type: 'place', searchText: ['ganga aarti', 'spiritual', 'evening ritual'] },
            { name: 'Beatles Ashram', type: 'place', searchText: ['meditation', 'abandoned', 'historic'] },
            { name: 'Shivpuri', type: 'place', searchText: ['rafting', 'camping', 'adventure'] }
          ]
        },
        {
          name: 'Dehradun',
          type: 'city',
          popular: true,
          coordinates: { lat: 30.3165, lng: 78.0322 },
          searchText: ['capital', 'valley', 'education'],
          children: [
            { name: 'Robber\'s Cave', type: 'place', searchText: ['guchhupani', 'waterfall', 'picnic'] },
            { name: 'Mindrolling Monastery', type: 'place', searchText: ['buddhist', 'garden', 'stupa'] },
            { name: 'Forest Research Institute', type: 'place', searchText: ['colonial', 'architecture', 'museum'] },
            { name: 'Malsi Deer Park', type: 'place', searchText: ['zoo', 'wildlife', 'family'] }
          ]
        },
        {
          name: 'Haridwar',
          type: 'city',
          popular: true,
          coordinates: { lat: 29.9457, lng: 78.1642 },
          searchText: ['holy city', 'kumbh mela', 'ganga'],
          children: [
            { name: 'Har Ki Pauri', type: 'place', searchText: ['ganga aarti', 'holy dip', 'evening ritual'] },
            { name: 'Mansa Devi Temple', type: 'place', searchText: ['temple', 'ropeway', 'hilltop'] },
            { name: 'Chandi Devi Temple', type: 'place', searchText: ['temple', 'trek', 'goddess'] },
            { name: 'Rajaji National Park', type: 'place', searchText: ['wildlife', 'elephants', 'safari'] }
          ]
        },
        {
          name: 'Nainital',
          type: 'city',
          popular: true,
          coordinates: { lat: 29.3919, lng: 79.4542 },
          searchText: ['lake city', 'hill station', 'british era'],
          children: [
            { name: 'Naini Lake', type: 'place', searchText: ['boating', 'central', 'mall road'] },
            { name: 'Snow View Point', type: 'place', searchText: ['ropeway', 'himalayan view', 'sunset'] },
            { name: 'Tiffin Top', type: 'place', searchText: ['viewpoint', 'trek', 'dorothy seat'] },
            { name: 'Naina Devi Temple', type: 'place', searchText: ['temple', 'lakeside', 'religious'] }
          ]
        },
        {
          name: 'Mussoorie',
          type: 'city',
          popular: true,
          coordinates: { lat: 30.4598, lng: 78.0644 },
          searchText: ['queen of hills', 'mall road', 'viewpoint'],
          children: [
            { name: 'Kempty Falls', type: 'place', searchText: ['waterfall', 'picnic', 'swimming'] },
            { name: 'Lal Tibba', type: 'place', searchText: ['highest point', 'telescope', 'sunrise'] },
            { name: 'Company Garden', type: 'place', searchText: ['park', 'flowers', 'family'] },
            { name: 'Cloud\'s End', type: 'place', searchText: ['viewpoint', 'heritage', 'sunset'] }
          ]
        },
        {
          name: 'Auli',
          type: 'city',
          popular: true,
          coordinates: { lat: 30.5302, lng: 79.5663 },
          searchText: ['skiing', 'winter sports', 'cable car'],
          children: [
            { name: 'Auli Artificial Lake', type: 'place', searchText: ['skiing', 'artificial snow', 'highest'] },
            { name: 'Gurso Bugyal', type: 'place', searchText: ['meadow', 'trekking', 'flowers'] },
            { name: 'Kwani Bugyal', type: 'place', searchText: ['meadow', 'hiking', 'camping'] },
            { name: 'Joshimath-Auli Ropeway', type: 'place', searchText: ['cable car', 'longest', 'view'] }
          ]
        },
        {
          name: 'Kedarnath',
          type: 'city',
          popular: true,
          coordinates: { lat: 30.7346, lng: 79.0669 },
          searchText: ['temple', 'char dham', 'pilgrimage'],
          children: [
            { name: 'Kedarnath Temple', type: 'place', searchText: ['shiva', 'jyotirlinga', 'ancient'] },
            { name: 'Gandhi Sarovar', type: 'place', searchText: ['chorabari tal', 'lake', 'trek'] },
            { name: 'Bhairav Temple', type: 'place', searchText: ['temple', 'protection', 'deity'] },
            { name: 'Shankaracharya Samadhi', type: 'place', searchText: ['memorial', 'spiritual', 'meditation'] }
          ]
        },
        {
          name: 'Badrinath',
          type: 'city',
          popular: true,
          coordinates: { lat: 30.7433, lng: 79.4938 },
          searchText: ['char dham', 'vishnu temple', 'pilgrimage'],
          children: [
            { name: 'Badrinath Temple', type: 'place', searchText: ['vishnu', 'holy', 'ancient'] },
            { name: 'Tapt Kund', type: 'place', searchText: ['hot spring', 'holy bath', 'natural'] },
            { name: 'Mana Village', type: 'place', searchText: ['last indian village', 'vyasa gufa', 'border'] },
            { name: 'Vasudhara Falls', type: 'place', searchText: ['waterfall', 'trek', 'scenic'] }
          ]
        },
        {
          name: 'Almora',
          type: 'city',
          coordinates: { lat: 29.5892, lng: 79.6467 },
          searchText: ['hill station', 'cultural', 'kumaon', 'heritage'],
          children: [
            { name: 'Bright End Corner', type: 'place', searchText: ['viewpoint', 'sunset', 'himalayan view'] },
            { name: 'Kasar Devi Temple', type: 'place', searchText: ['ancient', 'spiritual', 'meditation'] },
            { name: 'Martola', type: 'place', searchText: ['artist village', 'cultural', 'peaceful'] },
            { name: 'Nanda Devi Temple', type: 'place', searchText: ['temple', 'architecture', 'religious'] },
            { name: 'Zero Point', type: 'place', searchText: ['viewpoint', 'himalayan range', 'photography'] },
            { name: 'Chitai Temple', type: 'place', searchText: ['golu devta', 'bells', 'justice deity'] },
            { name: 'Govind Vallabh Pant Museum', type: 'place', searchText: ['freedom struggle', 'history', 'artifacts'] },
            { name: 'Simtola', type: 'place', searchText: ['eco park', 'picnic', 'sunset point'] },
            { name: 'Katarmal Sun Temple', type: 'place', searchText: ['ancient', 'architecture', '800 years old'] },
            { name: 'Deer Park', type: 'place', searchText: ['wildlife', 'nature', 'peaceful'] },
            { name: 'Mall Road', type: 'place', searchText: ['shopping', 'local market', 'heritage buildings'] },
            { name: 'Binsar Wildlife Sanctuary', type: 'place', searchText: ['wildlife', 'birds', 'himalayan views'] }
          ]
        },
        {
          name: 'Pauri Garhwal',
          type: 'city',
          coordinates: { lat: 30.1529, lng: 78.7830 },
          searchText: ['hills', 'view', 'peaceful'],
          children: [
            { name: 'Kandoliya Temple', type: 'place', searchText: ['temple', 'ancient', 'religious'] },
            { name: 'Kyunkaleshwar Temple', type: 'place', searchText: ['shiva temple', 'architecture', 'sacred'] },
            { name: 'Ransi Wildlife Sanctuary', type: 'place', searchText: ['wildlife', 'nature', 'birds'] }
          ]
        },
        {
          name: 'Pithoragarh',
          type: 'city',
          coordinates: { lat: 29.5833, lng: 80.2167 },
          searchText: ['miniature kashmir', 'valley', 'hills'],
          children: [
            { name: 'Pithoragarh Fort', type: 'place', searchText: ['historical', 'fort', 'architecture'] },
            { name: 'Munsiyari', type: 'place', searchText: ['himalayan peaks', 'trekking', 'scenic'] },
            { name: 'Dharchula', type: 'place', searchText: ['border town', 'valley', 'river'] }
          ]
        },
        {
          name: 'Chamoli',
          type: 'city',
          coordinates: { lat: 30.4000, lng: 79.3333 },
          searchText: ['valley of flowers', 'spiritual', 'mountains'],
          children: [
            { name: 'Valley of Flowers', type: 'place', searchText: ['unesco', 'national park', 'flowers'] },
            { name: 'Hemkund Sahib', type: 'place', searchText: ['gurudwara', 'pilgrimage', 'lake'] },
            { name: 'Gopeshwar', type: 'place', searchText: ['temple town', 'peaceful', 'scenic'] }
          ]
        },
        {
          name: 'Tehri Garhwal',
          type: 'city',
          coordinates: { lat: 30.3833, lng: 78.4833 },
          searchText: ['dam', 'lake', 'adventure'],
          children: [
            { name: 'Tehri Dam', type: 'place', searchText: ['hydroelectric', 'largest dam', 'reservoir'] },
            { name: 'New Tehri', type: 'place', searchText: ['planned city', 'lake view', 'modern'] },
            { name: 'Dhanaulti', type: 'place', searchText: ['hill station', 'peaceful', 'eco park'] }
          ]
        },
        {
          name: 'Udham Singh Nagar',
          type: 'city',
          coordinates: { lat: 28.9610, lng: 79.5152 },
          searchText: ['industrial', 'plains', 'agriculture'],
          children: [
            { name: 'Rudrapur', type: 'place', searchText: ['industrial city', 'business', 'modern'] },
            { name: 'Jim Corbett National Park', type: 'place', searchText: ['wildlife', 'tigers', 'safari'] }
          ]
        },
        {
          name: 'Champawat',
          type: 'city',
          coordinates: { lat: 29.3333, lng: 80.1000 },
          searchText: ['historical', 'temple', 'scenic'],
          children: [
            { name: 'Baleshwar Temple', type: 'place', searchText: ['ancient', 'architecture', 'religious'] },
            { name: 'Nagnath Temple', type: 'place', searchText: ['shiva temple', 'historical', 'sacred'] },
            { name: 'Abbott Mount', type: 'place', searchText: ['colonial', 'viewpoint', 'peaceful'] }
          ]
        },
        {
          name: 'Bageshwar',
          type: 'city',
          coordinates: { lat: 29.8500, lng: 79.7700 },
          searchText: ['spiritual', 'rivers', 'temple'],
          children: [
            { name: 'Bagnath Temple', type: 'place', searchText: ['shiva temple', 'ancient', 'religious'] },
            { name: 'Chandika Temple', type: 'place', searchText: ['goddess', 'temple', 'sacred'] },
            { name: 'Saryu River', type: 'place', searchText: ['holy river', 'ghats', 'scenic'] }
          ]
        },
        {
          name: 'Rudraprayag',
          type: 'city',
          coordinates: { lat: 30.2844, lng: 78.9811 },
          searchText: ['confluence', 'pilgrimage', 'mountains'],
          children: [
            { name: 'Koteshwar Temple', type: 'place', searchText: ['cave temple', 'shiva', 'ancient'] },
            { name: 'Kartik Swami Temple', type: 'place', searchText: ['temple', 'trekking', 'viewpoint'] },
            { name: 'Chopta', type: 'place', searchText: ['mini switzerland', 'trekking', 'scenic'] }
          ]
        },
        {
          name: 'Uttarkashi',
          type: 'city',
          coordinates: { lat: 30.7268, lng: 78.4354 },
          searchText: ['pilgrimage', 'adventure', 'mountains'],
          children: [
            { name: 'Gangotri Temple', type: 'place', searchText: ['temple', 'ganga origin', 'pilgrimage'] },
            { name: 'Yamunotri Temple', type: 'place', searchText: ['temple', 'yamuna origin', 'hot springs'] },
            { name: 'Dayara Bugyal', type: 'place', searchText: ['meadow', 'trekking', 'skiing'] }
          ]
        },
        {
          name: 'New Tehri',
          type: 'city',
          coordinates: { lat: 30.3797, lng: 78.4797 },
          searchText: ['tehri dam', 'lake city', 'modern'],
          children: [
            { name: 'Tehri Lake', type: 'place', searchText: ['water sports', 'boating', 'adventure'] },
            { name: 'Adventure Sports Complex', type: 'place', searchText: ['kayaking', 'jet skiing', 'adventure'] },
            { name: 'Tehri Dam Viewpoint', type: 'place', searchText: ['dam', 'scenic', 'engineering marvel'] }
          ]
        },
        {
          name: 'Chakrata',
          type: 'city',
          coordinates: { lat: 30.7015, lng: 77.8713 },
          searchText: ['cantonment', 'offbeat', 'mountains'],
          children: [
            { name: 'Tiger Falls', type: 'place', searchText: ['waterfall', 'hiking', 'pristine'] },
            { name: 'Kanasar Forest', type: 'place', searchText: ['deodar trees', 'nature', 'trails'] },
            { name: 'Deoban', type: 'place', searchText: ['viewpoint', 'himalayan peaks', 'sunrise'] }
          ]
        },
        {
          name: 'Lansdowne',
          type: 'city',
          coordinates: { lat: 29.8377, lng: 78.6871 },
          searchText: ['cantonment', 'garhwal rifles', 'quiet hill station'],
          children: [
            { name: 'Tip-n-Top', type: 'place', searchText: ['viewpoint', 'sunset', 'panoramic'] },
            { name: 'Garhwali Mess Museum', type: 'place', searchText: ['military', 'history', 'heritage'] },
            { name: 'St. Mary\'s Church', type: 'place', searchText: ['colonial', 'architecture', 'british era'] }
          ]
        },
        {
          name: 'Bhimtal',
          type: 'city',
          coordinates: { lat: 29.3469, lng: 79.5645 },
          searchText: ['lake city', 'kumaon', 'peaceful'],
          children: [
            { name: 'Bhimtal Lake', type: 'place', searchText: ['boating', 'island', 'aquarium'] },
            { name: 'Victoria Dam', type: 'place', searchText: ['british era', 'engineering', 'historic'] },
            { name: 'Folk Culture Museum', type: 'place', searchText: ['culture', 'artifacts', 'heritage'] }
          ]
        },
        {
          name: 'Sattal',
          type: 'city',
          coordinates: { lat: 29.3467, lng: 79.5947 },
          searchText: ['seven lakes', 'birdwatching', 'nature'],
          children: [
            { name: 'Seven Lakes', type: 'place', searchText: ['interconnected lakes', 'boating', 'peaceful'] },
            { name: 'Subhash Dhara', type: 'place', searchText: ['waterfall', 'trek', 'pristine'] },
            { name: 'Methodist Church', type: 'place', searchText: ['colonial', 'architecture', 'spiritual'] }
          ]
        },
        {
          name: 'Kausani',
          type: 'city',
          coordinates: { lat: 29.8447, lng: 79.5894 },
          searchText: ['switzerland of india', 'himalayan view', 'gandhi ashram'],
          children: [
            { name: 'Anasakti Ashram', type: 'place', searchText: ['gandhi', 'meditation', 'historical'] },
            { name: 'Tea Gardens', type: 'place', searchText: ['organic tea', 'plantation', 'scenic'] },
            { name: 'Rudradhari Falls', type: 'place', searchText: ['waterfall', 'caves', 'temple'] }
          ]
        },
        {
          name: 'Ranikhet',
          type: 'city',
          coordinates: { lat: 29.6433, lng: 79.4321 },
          searchText: ['cantonment', 'golf course', 'kumaon regiment'],
          children: [
            { name: 'Chaubatia Gardens', type: 'place', searchText: ['orchards', 'scenic', 'fruits'] },
            { name: 'Upat Golf Course', type: 'place', searchText: ['highest golf course', 'sports', 'scenic'] },
            { name: 'Jhula Devi Temple', type: 'place', searchText: ['religious', 'ancient', 'bells'] }
          ]
        },
        {
          name: 'Mukteshwar',
          type: 'city',
          coordinates: { lat: 29.4722, lng: 79.6479 },
          searchText: ['temple', 'fruit research', 'rock climbing'],
          children: [
            { name: 'Mukteshwar Temple', type: 'place', searchText: ['shiva temple', 'ancient', 'spiritual'] },
            { name: 'Mukteshwar Dham', type: 'place', searchText: ['religious', 'cliff', 'meditation'] },
            { name: 'Indian Veterinary Research Institute', type: 'place', searchText: ['research', 'colonial', 'historic'] }
          ]
        },
        {
          name: 'Abbott Mount',
          type: 'city',
          coordinates: { lat: 29.4239, lng: 80.0775 },
          searchText: ['offbeat', 'colonial', 'peaceful'],
          children: [
            { name: 'Abbott Mount View Point', type: 'place', searchText: ['panoramic', 'himalayan peaks', 'sunrise'] },
            { name: 'St. John\'s Church', type: 'place', searchText: ['colonial', 'architecture', 'peaceful'] },
            { name: 'Abbott Mount Estate', type: 'place', searchText: ['colonial bungalows', 'heritage', 'scenic'] }
          ]
        }
      ]
    },
    {
      name: 'Jammu and Kashmir',
      type: 'state',
      searchText: ['paradise on earth', 'kashmir valley', 'himalayan'],
      children: [
        {
          name: 'Srinagar',
          type: 'city',
          popular: true,
          coordinates: { lat: 34.0837, lng: 74.7973 },
          searchText: ['summer capital', 'dal lake', 'gardens'],
          children: [
            { 
              name: 'Dal Lake', 
              type: 'place', 
              searchText: ['houseboat', 'shikara', 'floating market', 'lotus gardens'] 
            },
            { 
              name: 'Shalimar Bagh', 
              type: 'place', 
              searchText: ['mughal garden', 'chinar trees', 'heritage'] 
            },
            { 
              name: 'Nishat Garden', 
              type: 'place', 
              searchText: ['garden of bliss', 'terraced garden', 'dal lake view'] 
            },
            { 
              name: 'Hazratbal Shrine', 
              type: 'place', 
              searchText: ['mosque', 'religious', 'white marble'] 
            },
            { 
              name: 'Shankaracharya Temple', 
              type: 'place', 
              searchText: ['hill top', 'ancient', 'panoramic view'] 
            }
          ]
        },
        {
          name: 'Gulmarg',
          type: 'city',
          popular: true,
          coordinates: { lat: 34.0494, lng: 74.3815 },
          searchText: ['ski resort', 'meadow of flowers', 'gondola'],
          children: [
            { 
              name: 'Gulmarg Gondola', 
              type: 'place', 
              searchText: ['cable car', 'highest gondola', 'skiing'] 
            },
            { 
              name: 'Alpather Lake', 
              type: 'place', 
              searchText: ['frozen lake', 'trekking', 'snow'] 
            },
            { 
              name: 'Gulmarg Golf Course', 
              type: 'place', 
              searchText: ['highest golf course', 'scenic', 'sports'] 
            },
            { 
              name: 'Children\'s Park', 
              type: 'place', 
              searchText: ['recreation', 'family', 'activities'] 
            }
          ]
        },
        {
          name: 'Pahalgam',
          type: 'city',
          popular: true,
          coordinates: { lat: 34.0159, lng: 75.3145 },
          searchText: ['valley of shepherds', 'amarnath yatra', 'river'],
          children: [
            { 
              name: 'Betaab Valley', 
              type: 'place', 
              searchText: ['scenic', 'river', 'movie location'] 
            },
            { 
              name: 'Aru Valley', 
              type: 'place', 
              searchText: ['meadow', 'trekking', 'pristine'] 
            },
            { 
              name: 'Chandanwari', 
              type: 'place', 
              searchText: ['snow point', 'amarnath yatra', 'glacier'] 
            },
            { 
              name: 'Baisaran', 
              type: 'place', 
              searchText: ['mini switzerland', 'meadow', 'horse riding'] 
            }
          ]
        },
        {
          name: 'Sonamarg',
          type: 'city',
          coordinates: { lat: 34.3067, lng: 75.2932 },
          searchText: ['meadow of gold', 'glacier', 'highway'],
          children: [
            { 
              name: 'Thajiwas Glacier', 
              type: 'place', 
              searchText: ['snow', 'trekking', 'sledging'] 
            },
            { 
              name: 'Zoji La', 
              type: 'place', 
              searchText: ['pass', 'highway', 'strategic'] 
            },
            { 
              name: 'Krishnasar Lake', 
              type: 'place', 
              searchText: ['high altitude', 'sacred', 'trek'] 
            }
          ]
        },
        {
          name: 'Jammu',
          type: 'city',
          popular: true,
          coordinates: { lat: 32.7266, lng: 74.8570 },
          searchText: ['winter capital', 'temples', 'historic'],
          children: [
            { 
              name: 'Vaishno Devi Temple', 
              type: 'place', 
              searchText: ['pilgrimage', 'holy cave', 'shrine'] 
            },
            { 
              name: 'Raghunath Temple', 
              type: 'place', 
              searchText: ['religious', 'architecture', 'largest temple complex'] 
            },
            { 
              name: 'Bahu Fort', 
              type: 'place', 
              searchText: ['historic', 'ancient', 'garden'] 
            },
            { 
              name: 'Peer Kho Cave', 
              type: 'place', 
              searchText: ['temple', 'cave', 'shiva'] 
            }
          ]
        },
        {
          name: 'Leh',
          type: 'city',
          popular: true,
          coordinates: { lat: 34.1526, lng: 77.5771 },
          searchText: ['ladakh', 'buddhist', 'high altitude'],
          children: [
            { 
              name: 'Leh Palace', 
              type: 'place', 
              searchText: ['royal palace', 'tibetan architecture', 'historic'] 
            },
            { 
              name: 'Pangong Lake', 
              type: 'place', 
              searchText: ['salt water lake', 'china border', 'blue waters'] 
            },
            { 
              name: 'Shanti Stupa', 
              type: 'place', 
              searchText: ['buddhist', 'peace pagoda', 'viewpoint'] 
            },
            { 
              name: 'Nubra Valley', 
              type: 'place', 
              searchText: ['desert', 'monastery', 'camel safari'] 
            },
            { 
              name: 'Magnetic Hill', 
              type: 'place', 
              searchText: ['optical illusion', 'gravity hill', 'phenomenon'] 
            }
          ]
        }
      ]
    },
    {
      name: 'Arunachal Pradesh',
      type: 'state',
      searchText: ['land of dawn-lit mountains', 'northeast', 'tribal'],
      children: [
        {
          name: 'Tawang',
          type: 'city',
          popular: true,
          coordinates: { lat: 27.5854, lng: 91.8583 },
          searchText: ['buddhist', 'monastery', 'mountain'],
          children: [
            { name: 'Tawang Monastery', type: 'place', searchText: ['largest monastery', 'buddhist', 'tibet'] },
            { name: 'Sela Pass', type: 'place', searchText: ['snow', 'high altitude', 'scenic drive'] },
            { name: 'Madhuri Lake', type: 'place', searchText: ['sangetsar lake', 'military', 'scenic'] },
            { name: 'War Memorial', type: 'place', searchText: ['1962 war', 'military', 'patriotic'] }
          ]
        },
        {
          name: 'Ziro',
          type: 'city',
          coordinates: { lat: 27.5336, lng: 93.8297 },
          searchText: ['apatani tribe', 'valley', 'festival'],
          children: [
            { name: 'Ziro Valley', type: 'place', searchText: ['unesco', 'rice cultivation', 'tribal'] },
            { name: 'Talley Valley', type: 'place', searchText: ['wildlife sanctuary', 'biodiversity', 'nature'] }
          ]
        },
        {
          name: 'Itanagar',
          type: 'city',
          coordinates: { lat: 27.0844, lng: 93.6053 },
          children: [
            { name: 'Ita Fort', type: 'place', searchText: ['ancient', 'brick structure', 'history'] },
            { name: 'Jawaharlal Nehru Museum', type: 'place', searchText: ['tribal culture', 'artifacts'] },
            { name: 'Ganga Lake', type: 'place', searchText: ['boating', 'picnic', 'recreation'] }
          ]
        }
      ]
    },
    {
      name: 'Manipur',
      type: 'state',
      searchText: ['jewel of india', 'northeast', 'dance'],
      children: [
        {
          name: 'Imphal',
          type: 'city',
          coordinates: { lat: 24.8170, lng: 93.9368 },
          popular: true,
          children: [
            { name: 'Kangla Fort', type: 'place', searchText: ['palace', 'history', 'kingdom'] },
            { name: 'Ima Keithel', type: 'place', searchText: ['women market', 'largest', 'traditional'] },
            { name: 'Loktak Lake', type: 'place', searchText: ['largest freshwater lake', 'phumdis', 'floating islands'] },
            { name: 'INA Memorial', type: 'place', searchText: ['netaji', 'freedom struggle', 'world war'] }
          ]
        },
        {
          name: 'Ukhrul',
          type: 'city',
          coordinates: { lat: 25.1195, lng: 94.3674 },
          searchText: ['tangkhul naga', 'shirui lily'],
          children: [
            { name: 'Shirui Hills', type: 'place', searchText: ['rare lily', 'trekking', 'flowers'] },
            { name: 'Hundung Falls', type: 'place', searchText: ['waterfall', 'scenic', 'nature'] }
          ]
        }
      ]
    },
    {
      name: 'Meghalaya',
      type: 'state',
      searchText: ['abode of clouds', 'rainfall', 'living root bridges'],
      children: [
        {
          name: 'Shillong',
          type: 'city',
          popular: true,
          coordinates: { lat: 25.5788, lng: 91.8933 },
          children: [
            { name: 'Ward\'s Lake', type: 'place', searchText: ['boating', 'garden', 'colonial'] },
            { name: 'Elephant Falls', type: 'place', searchText: ['waterfall', 'three steps', 'scenic'] },
            { name: 'Don Bosco Museum', type: 'place', searchText: ['culture', 'northeast', 'tribal'] },
            { name: 'Police Bazar', type: 'place', searchText: ['shopping', 'market', 'local'] }
          ]
        },
        {
          name: 'Cherrapunji',
          type: 'city',
          popular: true,
          coordinates: { lat: 25.2799, lng: 91.7263 },
          searchText: ['sohra', 'wettest place', 'living root bridges'],
          children: [
            { name: 'Double Decker Root Bridge', type: 'place', searchText: ['living', 'natural', 'unique'] },
            { name: 'Seven Sisters Falls', type: 'place', searchText: ['nohsngithiang falls', 'tallest', 'monsoon'] },
            { name: 'Nohkalikai Falls', type: 'place', searchText: ['highest plunge', 'waterfall', 'legend'] }
          ]
        },
        {
          name: 'Mawlynnong',
          type: 'city',
          coordinates: { lat: 25.1833, lng: 91.9333 },
          searchText: ['cleanest village', 'asia', 'eco-friendly'],
          children: [
            { name: 'Living Root Bridge', type: 'place', searchText: ['natural', 'bridge', 'unique'] },
            { name: 'Sky View Point', type: 'place', searchText: ['bamboo', 'viewpoint', 'bangladesh border'] }
          ]
        }
      ]
    },
    {
      name: 'Mizoram',
      type: 'state',
      searchText: ['land of the mizos', 'northeast', 'bamboo dance', 'hills'],
      children: [
        {
          name: 'Aizawl',
          type: 'city',
          popular: true,
          coordinates: { lat: 23.7271, lng: 92.7176 },
          searchText: ['capital', 'hillside', 'cultural center'],
          children: [
            { 
              name: 'Solomon\'s Temple', 
              type: 'place', 
              searchText: ['christian', 'architecture', 'religious', 'largest church'] 
            },
            { 
              name: 'Mizoram State Museum', 
              type: 'place', 
              searchText: ['culture', 'history', 'tribal artifacts'] 
            },
            { 
              name: 'Durtlang Hills', 
              type: 'place', 
              searchText: ['viewpoint', 'sunset', 'trekking'] 
            },
            { 
              name: 'Bara Bazar', 
              type: 'place', 
              searchText: ['shopping', 'local market', 'handicrafts'] 
            }
          ]
        },
        {
          name: 'Lunglei',
          type: 'city',
          coordinates: { lat: 22.8671, lng: 92.7655 },
          searchText: ['second largest', 'bridge town', 'scenic'],
          children: [
            { 
              name: 'Saikuti Hall', 
              type: 'place', 
              searchText: ['culture', 'performances', 'events'] 
            },
            { 
              name: 'Khawnglung Wildlife Sanctuary', 
              type: 'place', 
              searchText: ['wildlife', 'nature', 'birds'] 
            }
          ]
        },
        {
          name: 'Champhai',
          type: 'city',
          coordinates: { lat: 23.4567, lng: 93.3280 },
          searchText: ['rice bowl of mizoram', 'myanmar border', 'vineyards'],
          children: [
            { 
              name: 'Champhai Vineyard', 
              type: 'place', 
              searchText: ['wine', 'grapes', 'agriculture'] 
            },
            { 
              name: 'Rih Dil Lake', 
              type: 'place', 
              searchText: ['natural lake', 'mystical', 'border'] 
            },
            { 
              name: 'Lengteng Wildlife Sanctuary', 
              type: 'place', 
              searchText: ['wildlife', 'hiking', 'biodiversity'] 
            }
          ]
        },
        {
          name: 'Thenzawl',
          type: 'city',
          coordinates: { lat: 23.3167, lng: 92.7500 },
          searchText: ['handloom', 'paragliding', 'textile'],
          children: [
            { 
              name: 'Thenzawl Golf Course', 
              type: 'place', 
              searchText: ['sports', 'scenic', 'recreation'] 
            },
            { 
              name: 'Handloom Center', 
              type: 'place', 
              searchText: ['textile', 'weaving', 'shopping'] 
            },
            { 
              name: 'Vantawng Falls', 
              type: 'place', 
              searchText: ['waterfall', 'highest', 'picnic'] 
            }
          ]
        }
      ]
    },
    {
      name: 'Nagaland',
      type: 'state',
      searchText: ['land of festivals', 'northeast', 'tribal culture', 'hornbill'],
      children: [
        {
          name: 'Kohima',
          type: 'city',
          popular: true,
          coordinates: { lat: 25.6751, lng: 94.1086 },
          searchText: ['capital', 'world war II', 'naga heritage'],
          children: [
            { 
              name: 'Kohima War Cemetery', 
              type: 'place', 
              searchText: ['world war II', 'memorial', 'british', 'history'] 
            },
            { 
              name: 'Naga Heritage Village', 
              type: 'place', 
              searchText: ['kisama', 'hornbill festival', 'cultural', 'museum'] 
            },
            { 
              name: 'Catholic Cathedral', 
              type: 'place', 
              searchText: ['largest church', 'architecture', 'religious'] 
            },
            { 
              name: 'Dzükou Valley', 
              type: 'place', 
              searchText: ['valley of flowers', 'trekking', 'camping'] 
            }
          ]
        },
        {
          name: 'Dimapur',
          type: 'city',
          coordinates: { lat: 25.9091, lng: 93.7266 },
          searchText: ['commercial capital', 'gateway', 'ancient ruins'],
          children: [
            { 
              name: 'Kachari Ruins', 
              type: 'place', 
              searchText: ['archaeological', 'medieval', 'heritage'] 
            },
            { 
              name: 'Triple Falls', 
              type: 'place', 
              searchText: ['waterfall', 'picnic', 'nature'] 
            },
            { 
              name: 'Zoological Park', 
              type: 'place', 
              searchText: ['wildlife', 'conservation', 'education'] 
            }
          ]
        },
        {
          name: 'Mokokchung',
          type: 'city',
          coordinates: { lat: 26.3220, lng: 94.5135 },
          searchText: ['ao tribe', 'cultural center', 'colonial'],
          children: [
            { 
              name: 'Ungma Village', 
              type: 'place', 
              searchText: ['traditional', 'largest village', 'ao culture'] 
            },
            { 
              name: 'Mokokchung Park', 
              type: 'place', 
              searchText: ['viewpoint', 'sunset', 'recreation'] 
            }
          ]
        },
        {
          name: 'Mon',
          type: 'city',
          coordinates: { lat: 26.7500, lng: 95.0333 },
          searchText: ['konyak tribe', 'tattoo hunters', 'traditional'],
          children: [
            { 
              name: 'Longwa Village', 
              type: 'place', 
              searchText: ['indo-myanmar border', 'chief house', 'traditional'] 
            },
            { 
              name: 'Veda Peak', 
              type: 'place', 
              searchText: ['highest point', 'trekking', 'scenic'] 
            }
          ]
        },
        {
          name: 'Tuensang',
          type: 'city',
          coordinates: { lat: 26.2837, lng: 94.8249 },
          searchText: ['chang tribe', 'eastern nagaland', 'remote'],
          children: [
            { 
              name: 'Trinity College', 
              type: 'place', 
              searchText: ['education', 'architecture', 'landmark'] 
            },
            { 
              name: 'Changsao', 
              type: 'place', 
              searchText: ['peak', 'viewpoint', 'trekking'] 
            }
          ]
        }
      ]
    },
    {
      name: 'Tripura',
      type: 'state',
      searchText: ['cultural heritage', 'northeast', 'palaces', 'lakes'],
      children: [
        {
          name: 'Agartala',
          type: 'city',
          popular: true,
          coordinates: { lat: 23.8315, lng: 91.2868 },
          searchText: ['capital', 'royal city', 'cultural'],
          children: [
            { 
              name: 'Ujjayanta Palace', 
              type: 'place', 
              searchText: ['royal palace', 'museum', 'architecture', 'heritage'] 
            },
            { 
              name: 'Neermahal', 
              type: 'place', 
              searchText: ['water palace', 'rudrasagar lake', 'royal'] 
            },
            { 
              name: 'Tripura State Museum', 
              type: 'place', 
              searchText: ['culture', 'history', 'artifacts'] 
            },
            { 
              name: 'Unakoti', 
              type: 'place', 
              searchText: ['rock carvings', 'ancient', 'religious'] 
            }
          ]
        },
        {
          name: 'Udaipur',
          type: 'city',
          coordinates: { lat: 23.5333, lng: 91.4833 },
          searchText: ['temple town', 'lakes', 'historic'],
          children: [
            { 
              name: 'Tripureswari Temple', 
              type: 'place', 
              searchText: ['shakti peeth', 'religious', 'ancient'] 
            },
            { 
              name: 'Lake Palace', 
              type: 'place', 
              searchText: ['royal residence', 'architecture', 'lake view'] 
            },
            { 
              name: 'Mahamuni Temple', 
              type: 'place', 
              searchText: ['buddhist', 'historic', 'pilgrimage'] 
            }
          ]
        },
        {
          name: 'Amarpur',
          type: 'city',
          coordinates: { lat: 23.5262, lng: 91.6557 },
          searchText: ['eco tourism', 'wildlife', 'nature'],
          children: [
            { 
              name: 'Trishna Wildlife Sanctuary', 
              type: 'place', 
              searchText: ['bison', 'wildlife', 'nature'] 
            },
            { 
              name: 'Chabimura', 
              type: 'place', 
              searchText: ['rock carvings', 'gomati river', 'boat ride'] 
            }
          ]
        },
        {
          name: 'Ambassa',
          type: 'city',
          coordinates: { lat: 23.9363, lng: 91.8554 },
          searchText: ['tribal culture', 'tea gardens', 'hills'],
          children: [
            { 
              name: 'Kalajhari Hills', 
              type: 'place', 
              searchText: ['eco park', 'trekking', 'scenic'] 
            },
            { 
              name: 'Tea Gardens', 
              type: 'place', 
              searchText: ['plantation', 'tourism', 'scenic'] 
            }
          ]
        }
      ]
    },
    {
      name: 'Andaman & Nicobar Islands',
      type: 'state',
      searchText: ['islands', 'beaches', 'coral reefs'],
      children: [
        {
          name: 'Port Blair',
          type: 'city',
          popular: true,
          coordinates: { lat: 11.6234, lng: 92.7265 },
          children: [
            { name: 'Cellular Jail', type: 'place', searchText: ['freedom struggle', 'history', 'museum'] },
            { name: 'Ross Island', type: 'place', searchText: ['british ruins', 'history', 'deer'] },
            { name: 'Corbyn\'s Cove', type: 'place', searchText: ['beach', 'water sports', 'sunset'] }
          ]
        },
        {
          name: 'Havelock Island',  
          type: 'city',
          coordinates: { lat: 12.0000, lng: 92.9637 },
          searchText: ['beaches', 'diving', 'snorkeling'],
          children: [
            { name: 'Radhanagar Beach', type: 'place', searchText: ['best beach', 'sunset', 'swimming'] },
            { name: 'Elephant Beach', type: 'place', searchText: ['coral reef', 'snorkeling', 'water sports'] }
          ]
        },
        {
          name: 'Neil Island',
          type: 'city',
          coordinates: { lat: 11.8311, lng: 93.0384 },
          children: [
            { name: 'Bharatpur Beach', type: 'place', searchText: ['coral reef', 'clear water'] },
            { name: 'Natural Bridge', type: 'place', searchText: ['coral formation', 'scenic'] }
          ]
        }
      ]
    },
    {
      name: 'Daman & Diu',
      type: 'state',
      searchText: ['union territory', 'portuguese', 'beaches'],
      children: [
        {
          name: 'Daman',
          type: 'city',
          coordinates: { lat: 20.4283, lng: 72.8397 },
          children: [
            { name: 'Devka Beach', type: 'place', searchText: ['beach', 'sunset', 'recreation'] },
            { name: 'Fort of Moti Daman', type: 'place', searchText: ['portuguese', 'historic'] }
          ]
        },
        {
          name: 'Diu',
          type: 'city',
          coordinates: { lat: 20.7144, lng: 70.9874 },
          children: [
            { name: 'Diu Fort', type: 'place', searchText: ['portuguese', 'sea view'] },
            { name: 'Nagoa Beach', type: 'place', searchText: ['water sports', 'palm trees'] }
          ]
        }
      ]
    },
    {
      name: 'Delhi',
      type: 'state',
      searchText: ['capital', 'metropolitan', 'historical'],
      children: [
        {
          name: 'Central Delhi',
          type: 'city',
          coordinates: { lat: 28.6328, lng: 77.2197 }
        },
        {
          name: 'New Delhi',
          type: 'city',
          popular: true,
          coordinates: { lat: 28.6139, lng: 77.2090 },
          children: [
            { name: 'India Gate', type: 'place', searchText: ['war memorial', 'landmark', 'national'] },
            { name: 'Red Fort', type: 'place', searchText: ['mughal', 'independence day', 'unesco'] },
            { name: 'Qutub Minar', type: 'place', searchText: ['unesco', 'islamic', 'tower'] },
            { name: 'Humayun\'s Tomb', type: 'place', searchText: ['mughal', 'architecture', 'unesco', 'garden'] },
            { name: 'Lotus Temple', type: 'place', searchText: ['bahai', 'modern architecture', 'meditation'] },
            { name: 'Akshardham Temple', type: 'place', searchText: ['hindu', 'largest temple complex', 'exhibitions'] },
            { name: 'Connaught Place', type: 'place', searchText: ['shopping', 'colonial', 'market', 'restaurants'] },
            { name: 'Lodhi Gardens', type: 'place', searchText: ['park', 'monuments', 'tombs', 'joggers'] },
            { name: 'National Museum', type: 'place', searchText: ['artifacts', 'history', 'culture', 'exhibitions'] }
          ]
        },
        {
          name: 'South Delhi',
          type: 'city',
          coordinates: { lat: 28.5397, lng: 77.2497 }
        },
        {
          name: 'North Delhi',
          type: 'city',
          coordinates: { lat: 28.7299, lng: 77.2056 }
        },
        {
          name: 'West Delhi',
          type: 'city',
          coordinates: { lat: 28.6663, lng: 77.0678 }
        }
      ]
    },
    {
      name: 'Puducherry',
      type: 'state',
      searchText: ['french colony', 'beach', 'spiritual'],
      children: [
        {
          name: 'Pondicherry',
          type: 'city',
          popular: true,
          coordinates: { lat: 11.9139, lng: 79.8145 },
          children: [
            { name: 'Promenade Beach', type: 'place', searchText: ['seaside', 'gandhi statue', 'french quarter'] },
            { name: 'Auroville', type: 'place', searchText: ['spiritual', 'meditation', 'matrimandir'] },
            { name: 'Paradise Beach', type: 'place', searchText: ['pristine', 'boat ride', 'peaceful'] }
          ]
        },
        {
          name: 'Karaikal',
          type: 'city',
          coordinates: { lat: 10.9254, lng: 79.8380 }
        },
        {
          name: 'Mahe',
          type: 'city',
          coordinates: { lat: 11.7018, lng: 75.5377 }
        },
        {
          name: 'Yanam',
          type: 'city',
          coordinates: { lat: 16.7271, lng: 82.2175 }
        }
      ]
    },
    {
      name: 'Ladakh',
      type: 'state',
      searchText: ['buddhist', 'mountains', 'monastery'],
      children: [
        {
          name: 'Leh',
          type: 'city',
          popular: true,
          coordinates: { lat: 34.1526, lng: 77.5771 },
          children: [
            { name: 'Pangong Lake', type: 'place', searchText: ['high altitude lake', 'scenic', 'border'] },
            { name: 'Khardung La', type: 'place', searchText: ['highest pass', 'mountain', 'adventure'] },
            { name: 'Thiksey Monastery', type: 'place', searchText: ['buddhist', 'architecture', 'spiritual'] }
          ]
        },
        {
          name: 'Kargil',
          type: 'city',
          coordinates: { lat: 34.5539, lng: 76.1349 },
          children: [
            { name: 'Kargil War Memorial', type: 'place', searchText: ['military', 'history', 'patriotic'] },
            { name: 'Mulbekh Monastery', type: 'place', searchText: ['buddhist', 'ancient', 'cultural'] }
          ]
        }
      ]
    },
    {
      name: 'Chandigarh',
      type: 'state',
      searchText: ['planned city', 'le corbusier', 'modern'],
      children: [
        {
          name: 'Chandigarh',
          type: 'city',
          popular: true,
          coordinates: { lat: 30.7333, lng: 76.7794 },
          children: [
            { name: 'Rock Garden', type: 'place', searchText: ['sculpture', 'art', 'recycled'] },
            { name: 'Sukhna Lake', type: 'place', searchText: ['artificial lake', 'recreation', 'sunset'] },
            { name: 'Capitol Complex', type: 'place', searchText: ['architecture', 'government', 'unesco'] }
          ]
        }
      ]
    },
    {
      name: 'Haryana',
      type: 'state',
      searchText: ['NCR', 'industrial', 'agriculture'],
      children: [
        {
          name: 'Gurgaon',
          type: 'city',
          popular: true,
          coordinates: { lat: 28.4595, lng: 77.0266 },
          searchText: ['cyber city', 'IT hub', 'millennium city'],
          children: [
            { name: 'Cyber Hub', type: 'place', searchText: ['dining', 'corporate', 'entertainment'] },
            { name: 'Kingdom of Dreams', type: 'place', searchText: ['theatre', 'culture', 'shows'] },
            { name: 'Ambience Mall', type: 'place', searchText: ['shopping', 'entertainment', 'luxury'] }
          ]
        },
        {
          name: 'Faridabad',
          type: 'city',
          coordinates: { lat: 28.4089, lng: 77.3178 },
          searchText: ['industrial city', 'NCR', 'manufacturing'],
          children: [
            { name: 'Surajkund', type: 'place', searchText: ['craft fair', 'tourist', 'cultural'] },
            { name: 'Badkhal Lake', type: 'place', searchText: ['picnic', 'lake', 'recreation'] }
          ]
        },
        {
          name: 'Panipat',
          type: 'city',
          coordinates: { lat: 29.3909, lng: 76.9635 },
          searchText: ['textile city', 'historical', 'battle'],
          children: [
            { name: 'Panipat Museum', type: 'place', searchText: ['history', 'artifacts', 'battle'] },
            { name: 'Kabuli Bagh Mosque', type: 'place', searchText: ['historical', 'architecture', 'babur'] }
          ]
        }
      ]
    }
  ]
};

export const initialState = {
  errorshouse: {},

  fourHouses: [],

  searchHouses: [],

  types: [],

  country: [],

  house: {
    id: "",
    address: "42 avenue des ananas",
    zipcode: "00 007",
    city: "Bikini bottom",
    title: "L'ananas sous le mer",
    rooms: 2,
    bedrooms: 2,
    surface: 60,
    area: 500,
    floor: 3,
    description: "Ananas pour passer un super séjour",
    type: { id:1, type: 'Maison'},
    country: {id:1, country: 'France'},
    latitude: "",
    longitude: "",
    map: "",
    internet: false,
    washing_machine: true,
    TV: true,
    hoven: true,
    microwaven: true,
    dishwasher: true,
    bathub: false,
    shower: true,
    parking: false,
  },

  houseFormPhoto: {},

  houseFormDesc: {
    id: "",
    address: "42 avenue des ananas",
    zipcode: "00 007",
    city: "Bikini bottom",
    title: "L'ananas sous le mer",
    rooms: 2,
    bedrooms: 2,
    surface: 60,
    area: 500,
    floor: 3,
    description: "Ananas pour passer un super séjour",
    type: { id:4, type: 'Loft' },
    country: { id:3, country: 'Belgique' },
    latitude: "",
    longitude: "",
    map: "",
  },

  houseFormBool: {
    id: "",
    internet: false,
    washing_machine: true,
    TV: true,
    hoven: true,
    microwaven: true,
    dishwasher: true,
    bathub: false,
    shower: true,
    parking: false
  },
};

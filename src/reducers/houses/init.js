export const initialState = {
  errorsHouse: {},

  fourHouses: [],

  searchHouses: [],

  types: [
    {
      id: 1,
      value: "Maison",
    },
    {
      id: 2,
      value: "Appartement",
    },
    {
      id: 3,
      value: "Chateau",
    },
    {
      id: 4,
      value: "Loft",
    },
  ],

  countries: [
    {
      id: 1,
      value: "France",
    },
    {
      id: 2,
      value: "Italie",
    },
    {
      id: 3,
      value: "Belgique",
    },
    {
      id: 4,
      value: "Espagne",
    },
  ],

  houseDesc: {
    id: "",
    address: "42 avenue des ananas",
    zipcode: "00 007",
    city: "Bikini bottom",
    title: "L'ananas sous la mer",
    rooms: 2,
    bedrooms: 2,
    surface: 60,
    area: 500,
    floor: 3,
    description: "Ananas pour passer un super séjour",
    type: 1,
    country: 1,
    latitude: "",
    longitude: "",
    map: ""
  },
  
  houseBool: {
    id:"",
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

  houseFormPhoto: {},

  houseFormDesc: {
    id: "",
    address: "42 avenue des ananas",
    zipcode: "00 007",
    city: "Bikini bottom",
    title: "L'ananas sous la mer",
    rooms: 2,
    bedrooms: 2,
    surface: 60,
    area: 500,
    floor: 3,
    description: "Ananas pour passer un super séjour",
    type: 1,
    country: 1,
    latitude: "",
    longitude: "",
    map: ""
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

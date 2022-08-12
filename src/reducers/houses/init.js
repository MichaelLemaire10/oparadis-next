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

  photos: [
    {
      id: 1,
      photo:
        "https://res.cloudinary.com/dhwbw94lc/image/upload/v1660203440/n2li1ljlx47svs7wlnki.jpg",
      main_photo: true,
      target: 4
    },
    {
      id: 2,
      photo:
        "https://res.cloudinary.com/dhwbw94lc/image/upload/v1660203440/jrpobvjgn6sbnxosng4x.jpg",
      main_photo: false,
      target: 0
    },
    {
      id: 3,
      photo:
        "https://res.cloudinary.com/dhwbw94lc/image/upload/v1660203440/yoy8ngsxzsazbobuwlvx.jpg",
      main_photo: false,
      target: 1
    },
    {
      id: 4,
      photo:
        "https://res.cloudinary.com/dhwbw94lc/image/upload/v1660203440/u2h1ucd7yp2g7wwhwto3.jpg",
      main_photo: false,
      target: 2
    },
    {
      id: 5,
      photo:
        "https://res.cloudinary.com/dhwbw94lc/image/upload/v1660204198/jbjrnhqfkyjhwvhgkiwn.jpg",
      main_photo: false,
      target: 3
    }
  ],

  photosForm: [],

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
    map: "",
  },

  houseBool: {
    id: "",
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
    parking: false,
  },
};

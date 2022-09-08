export const initialState = {
  errorsHouse: {},

  fourHouses: [],

  search: '',

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
    address: "",
    zipcode: "",
    city: "",
    title: "",
    rooms: 0,
    bedrooms: 0,
    surface: 0,
    area: 0,
    floor: 0,
    description: "",
    type: 1,
    country: 75,
    latitude: "",
    longitude: "",
    map: "",
  },

  houseBool: {
    internet: false,
    washing_machine: false,
    TV: false,
    hoven: false,
    microwaven: false,
    dishwasher: false,
    bathub: false,
    shower: false,
    parking: false,
  },

  houseFormDesc: {
    address: "",
    zipcode: "",
    city: "",
    title: "",
    rooms: 0,
    bedrooms: 0,
    surface: 0,
    area: 0,
    floor: 0,
    description: "",
    type_id: "cl7946esm17578ov2x3cwgvm1",
    country_id: "cl7946d0h00008ov2fbxuyha4",
    latitude: "",
    longitude: "",
    map: "",
  },

  houseFormBool: {
    internet: false,
    washing_machine: false,
    TV: false,
    hoven: false,
    microwaven: false,
    dishwasher: false,
    bathub: false,
    shower: false,
    parking: false,
  },
};

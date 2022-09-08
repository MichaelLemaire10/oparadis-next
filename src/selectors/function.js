import { getUser, setProfilDesc } from "../reducers/users/slice";
import {
  getHouseDesc,
  getHouseBool,
  setHouseFormDesc,
  setHouseFormBool,
} from "../reducers/houses/slice";

export const setUser = ({ data, dispatch }) => {
  if (data) {
    const user = {
      email: data.email,
      firstname: data.firstname,
      lastname: data.lastname,
      pseudo: data.pseudo,
      phone_number: data.phone_number,
      avatar: data.avatar,
      description: data.description ? data.description : "",
    };
    dispatch(getUser(user));
    dispatch(setProfilDesc(user));
  }

  if (data.house) {
    const house = data.house;
    setHouse({ house, dispatch });
  };
};

export const setHouse = ({ house, dispatch }) => {
  
    const desc = {
      id: house.id,
      address: house.address,
      zipcode: house.zipcode,
      city: house.city,
      title: house.title,
      rooms: house.rooms,
      bedrooms: house.bedrooms,
      surface: house.surface,
      area: house.area,
      floor: house.floor,
      description: house.description,
      type: house.type,
      country: house.country,
      latitude: house.latitude,
      longitude: house.longitude,
      map: house.map,
    };
    
    const bool = {
      id: house.id,
      internet: house.internet,
      washing_machine: house.washing_machine,
      TV: house.TV,
      hoven: house.hoven,
      microwaven: house.microwaven,
      dishwasher: house.dishwasher,
      bathub: house.bathub,
      shower: house.shower,
      parking: house.parking,
    };
    dispatch(getHouseDesc(desc));
    dispatch(getHouseBool(bool));
    dispatch(setHouseFormDesc(desc));
    dispatch(setHouseFormBool(bool));
};
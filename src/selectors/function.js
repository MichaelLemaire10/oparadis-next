import { getUser, setProfilDesc } from "../reducers/users/slice";
import { getAnimals } from "../reducers/animals/slice";
import { getPlants } from "../reducers/plants/slice";
import {
  getHouseDesc,
  getHouseBool,
  setHouseFormDesc,
  setHouseFormBool,
  setPhotos,
} from "../reducers/houses/slice";

export const setMe = ({ data, dispatch }) => {
  console.time("speed data =>");
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
    const { house } = data;
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
  }
  // if(data.photos[0] ou data.house.photos[0]) {
  // const { photos } = data.house ou data;
  // const mainPhoto = photos.find( p => p.main_photo === true);
  // mainPhoto.target = 4
  // const arrayFilter = photos.filter( p => p.main_photo === false);
  // const newArray = arrayFilter.map((p, i) => { ...p, target: i });
  // newArray.push({ ...mainPhoto, traget: 4 });
  // console.log('newArray:', newArray);
  // dispatch(setPhotos(newArray));
  // };

  if (data.plants[0]) dispatch(getPlants(data.plants));
  if (data.animals[0]) dispatch(getAnimals(data.animals));

  console.timeEnd("speed data =>");
};

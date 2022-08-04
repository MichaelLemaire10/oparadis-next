import { userApi } from "./user";
import { houseApi } from "./house";
import { photoApi } from "./photo";
import { animalApi } from "./animal";
import { plantApi } from "./plant";

export const reducerApi = {
    [userApi.reducerPath]: userApi.reducer,
    [houseApi.reducerPath]: houseApi.reducer,
    [photoApi.reducerPath]: photoApi.reducer,
    [animalApi.reducerPath]: animalApi.reducer,
    [plantApi.reducerPath]: plantApi.reducer,
}
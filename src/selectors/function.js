
export const setMe = (data) => {
    console.log('data =>', data);
    if(data) {
    const user = {};
    //dispatch(user());
    //dispatch(userForm());
    };
    if(data.house){
        console.log('data =>', data.house);
        const desc = {};
        const bool = {};
        // dispatch(houseDesc(desc));
        // dispatch(houseBool(bool));
        // dispatch(houseFormDesc(desc));
        // dispatch(houseFormBool(bool));
    };
    // if(data.photos[0] ou data.house.photos[0]) {

    // };
    if(data.plants[0]) dispatch(plants(data.plants));
    if(data.animals[0]) dispatch(animals(data.animals));
};

export const initialState = {
    
  errorsUser: {},

  signup: {
    email: "",
    password: "",
    repeat_password: "",
    firstname: "",
    lastname: "",
    pseudo: "",
    phone_number: "",
  },

  signin: {
    email: "",
    password: "",
  },

  user: {
    id: "",
    email: "Bob@bikini.io",
    firstname: "Bob",
    lastname: "L'éponge",
    pseudo: "Bob_00STEACK",
    phone_number: "0606060606",
    avatar: "https://res.cloudinary.com/dhwbw94lc/image/upload/v1660140442/qunwg7yc1xoommtql44w.jpg",
    // avatar: "https://res.cloudinary.com/oparadis/image/upload/v1659708883/avatars/wwfddypsyw4lmdeofpyh.jpg",
    description: "Bienvenu dans mon ananas !!! Burger gratuit à tous les repas !!! Je suis heureux de faire de nouvelle rencontre !!!",
  },

  userFormDesc: {
    id:"",
    email: "",
    firstname: "",
    lastname: "",
    pseudo: "",
    phone_number: "",
    avatar: "",
    description: "",
  },

  userFormPwd: {
    password: "",
    repeat_password: "",
    old_password: "",
  },
};

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
    email: "",
    firstname: "",
    lastname: "",
    pseudo: "",
    phone_number: "",
    avatar: null,
    // avatar: "https://res.cloudinary.com/oparadis/image/upload/v1659708883/avatars/wwfddypsyw4lmdeofpyh.jpg",
    description: null,
  },

  userFormDesc: {
    id:"",
    email: "",
    firstname: "",
    lastname: "",
    pseudo: "",
    phone_number: "",
    avatar: null,
    description: "",
  },

  userFormPwd: {
    password: "",
    repeat_password: "",
    old_password: "",
  },
};

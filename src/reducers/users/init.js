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
    email: "",
    firstname: "",
    lastname: "",
    pseudo: "",
    phone_number: "",
    avatar: "https://res.cloudinary.com/oparadis/image/upload/v1659708883/avatars/wwfddypsyw4lmdeofpyh.jpg",
    description: "",
  },

  userFormDesc: {
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

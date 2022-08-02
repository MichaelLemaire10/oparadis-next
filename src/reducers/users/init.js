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
    id:"",
    email: "",
    firstname: "",
    lastname: "",
    pseudo: "",
    phone_number: "",
    avatar: "",
    description: "",
  },

  userFormDesc: {
    id:"",
    email: "",
    firstname: "",
    lastname: "",
    pseudo: "",
    phone_number: "",
    avatar: "",
    avatar_delete: false,
    description: "",
  },

  userFormPassword: {
    id:"",
    password: "",
    repeat_password: "",
    old_password: "",
  },
};

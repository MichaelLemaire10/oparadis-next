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
    email: "Bob@bikini.io",
    firstname: "Bob",
    lastname: "L'éponge",
    pseudo: "",
    phone_number: "0606060606",
    avatar: "",
    description: "Je vis sous la mer.",
  },

  userFormDesc: {
    email: "",
    firstname: "",
    lastname: "",
    pseudo: "",
    phone_number: "",
    avatar: "",
    avatar_delete: false,
    description: "",
  },

  userFormPwd: {
    password: "",
    repeat_password: "",
    old_password: "",
  },
};

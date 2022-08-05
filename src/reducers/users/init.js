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
    pseudo: "Bobby",
    phone_number: "0606060606",
    // avatar: "https://res.cloudinary.com/dhwbw94lc/image/upload/v1658831225/image%20default/urlcrattyjx57uzwtqb5.jpg",
    avatar: "https://res.cloudinary.com/oparadis/image/upload/v1655907032/avatars/fpc9avx8ypafd2yxuo2b.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Dolore eius labore reprehenderit, dignissimos impedit expedita est fugit esse sit quia ex.",
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

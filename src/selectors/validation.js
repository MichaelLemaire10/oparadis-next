//  House //
export const validationHouse = ({
  address,
  zipcode,
  city,
}) => {
  const errors = {};

  if (!address) {
    errors.address = "L'adresse est obligatoire";
  }
  if (!zipcode) {
    errors.zipcode = "CP est obligatoire";
  }
  if (!city) {
    errors.city = " la ville est obligatoire";
  }
  return errors;
};

// User //
export const validationSignup = ({
  firstname,
  lastname,
  email,
  phone_number,
  password,
  confirmationPassword,
}) => {
  
  const errors = {};
  
  if (!firstname) {
    errors.firstname = "Le prénom est vide";
  }
  if (!lastname) {
    errors.lastname = "Le nom est vide";
  }
  if (!phone_number) {
    errors.phone_number = "Le numéro est vide";
  } else if (phone_number.length <= 9 && phone_number.length >= 11) {
    errors.phone_number = "Veuillez rentrer un numéro à 10 chiffres";
  }
  if (!email) {
    errors.email = "L'email est vide!";
  } else if (email === 403) {
    errors.email = "Ce mail est déjà utilisé";
  }else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "L'Email est invalide";
  }
  if (!password) {
    errors.password = "Un mot de passe est requis";
  } else if (password.length < 3) {
    errors.password = "3 caractères minimum";
  }
  if (!confirmationPassword) {
    errors.confirmationPassword = "confirmez votre mot de passe";
  } else if (password !== confirmationPassword) {
    errors.confirmationPassword = "Mots de passes différents";
    errors.password = "Mots de passes différents";
  }

  return errors;
};

export const validationSignin = ({ email, password }) => {
  const errors = {};

  if (!email) {
    errors.email = "L'email est vide";
  } else if (email === 400) {
    errors.email = "L'email ou le mot de passe sont incorrect";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "L'email est invalide";
  } 
  if (!password) {
    errors.password = "Un mot de passe est requis";
  } else if (password.length < 3) {
    errors.password = "3 caractères minimum";
  } else if (password === 403) {
    errors.password = "L'email ou le mot de passe sont incorrect";
  }

  return errors;
};

export const validationProfilDesc = ({
  firstname,
  lastname,
  email,
  phone_number,
  description,
}) => {
  const errors = {};

  if (!firstname) {
    errors.firstname = "Le prénom est vide";
  }
  if (!lastname) {
    errors.lastname = "Le nom est vide";
  }
  if (!phone_number) {
    errors.phone_number = "Le numéro de téléphone est vide";
  } else if (phone_number.length <= 9 && phone_number.length >= 11) {
    errors.phone_number = "Veuillez rentrer un numéro à 10 chiffres";
  }
  if (!email) {
    errors.email = "L'email est vide";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "L'Email est invalide";
  }
  if (description.length > 150) {
    errors.description = "Max 150 caractères";
  }

  return errors;
};

export const validationProfilPwd = ({
  password,
  confirmationPassword,
  oldPassword,
}) => {
  const errors = {};

  if (!password) {
    errors.password = "Un mot de passe est requis";
  } else if (password.length < 3) {
    errors.password = "3 caractères minimum";
  }
  if (!confirmationPassword) {
    errors.confirmationPassword = "Confirmez votre mot de passe";
  } else if (password !== confirmationPassword) {
    errors.confirmationPassword = "Mots de passes différents";
    errors.password = "Mots de passes différents";
  } else if (confirmationPassword.length < 3) {
    errors.confirmationPassword = "3 caractères minimum";
  }
  if (!oldPassword) {
    errors.oldPassword = "L'ancien mot de passe est requis";
  } else if (oldPassword.length < 3) {
    errors.oldPassword = "3 caractères minimum";
  }
  return errors;
};

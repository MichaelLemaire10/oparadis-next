export const validationSignup = ({
  firstname,
  lastname,
  email,
  phone_number,
  password,
  repeat_password,
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
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "L'Email est invalide format attendu jean@outlook.fr";
  }
  if (!password) {
    errors.password = "Un mot de passe est requis";
  } else if (password.length < 3) {
    errors.password = "3 caractères minimum";
  }
  if (!repeat_password) {
    errors.repeat_password = "confirmez votre mot de passe";
  } else if (password !== repeat_password) {
    errors.repeat_password = "Mots de passes différents";
    errors.password = "Mots de passes différents";
  }

  return errors;
};

export const validationSignin = ({ email, password }) => {
  const errors = {};

  if (!email) {
    errors.email = "L'email est vide";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "L'Email est invalide format attendu jean@outlook.fr";
  }
  if (!password) {
    errors.password = "Un mot de passe est requis";
  } else if (password.length < 3) {
    errors.password = "3 caractères minimum";
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
    errors.email = "L'Email est invalide format attendu jean@outlook.fr";
  }
  if (description.length > 150) {
    errors.description = "Max 150 caractères";
  }

  return errors;
};

export const validationProfilPwd = ({
  password,
  repeat_password,
  old_password,
}) => {
  const errors = {};

  if (!password) {
    errors.password = "Un mot de passe est requis";
  } else if (password.length < 3) {
    errors.password = "3 caractères minimum";
  }
  if (!repeat_password) {
    errors.repeat_password = "Confirmez votre mot de passe";
  } else if (password !== repeat_password) {
    errors.repeat_password = "Mots de passes différents";
    errors.password = "Mots de passes différents";
  } else if (repeat_password.length < 3) {
    errors.repeat_password = "3 caractères minimum";
  }
  if (!old_password) {
    errors.old_password = "L'ancien mot de passe est requis";
  } else if (old_password.length < 3) {
    errors.old_password = "3 caractères minimum";
  }
  return errors;
};

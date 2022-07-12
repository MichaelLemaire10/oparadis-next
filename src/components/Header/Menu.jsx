import React from "react";
import Image from "next/image";
import logoBurgerMenu from "../../../public/logo_burger_menu.png";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles, createStyles} from "@material-ui/core/styles";
import styles from "../../../styles/Header.module.css";
import imageLoader from "../../../imagesLoader";
// import ModalSignin from "../Modal/ModalSignin";
// import ModalSignup from "../Modal/ModalSignup";
import TextFormProfil from "../Profil/TextForm";
import PasswordFormProfil from "../Profil/PasswordForm";
import {
  Modal,
  Box,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    paper: {
      marginRight: theme.spacing(2),
    },
  })
);

export default function MenuListComposition() {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = React.useState(false);
  const anchorRef = React.useRef(null);
  // Modal //
  const [openModalSignin, setOpenModalSignin] = React.useState(false);
  const [openModalSignup, setOpenModalSignup] = React.useState(false);

  // const [openModal, setOpenModal] = React.useState(false);
  const handleOpenOrCloseForUp = () =>
    openModalSignup ? setOpenModalSignup(false) : setOpenModalSignup(true);
  const handleOpenOrCloseForIn = () =>
    openModalSignin ? setOpenModalSignin(false) : setOpenModalSignin(true);

  const handleModalSignin = () => {
    handleOpenOrCloseForIn();
    setOpenModalSignin(true);
    setOpenMenu(false);
  };
  const submitSignInForm = () => {
    // setErrors(validation(userObject));
    console.log("connecter");
    handleOpenOrCloseForIn();
  };
  const handleModalSignup = () => {
    handleOpenOrCloseForUp();
    setOpenModalSignup(true);
    setOpenMenu(false);
  };
  const submitTheForm = () => {
    console.log("valider");
    handleOpenOrCloseForUp();
  };
  // Modal End //

  const handleToggle = () => {
    setOpenMenu((prevopenMenu) => !prevopenMenu);
  };

  const handleClose = (event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target)
    ) {
      return;
    }

    setOpenMenu(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenMenu(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !openMenu -> openMenu
  const prevopenMenu = React.useRef(openMenu);
  React.useEffect(() => {
    if (prevopenMenu.current === true && openMenu === false) {
      anchorRef.current.focus();
    }

    prevopenMenu.current = openMenu;
  }, [openMenu]);

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={openMenu ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          {/* burgerMenu */}
          <Image
            className={
              openMenu
                ? `${styles.div_menu__img}`
                : `${styles.div_menu__img_false}`
            }
            loader={imageLoader}
            unoptimized
            src={logoBurgerMenu}
            alt="logo burger menu"
          />
        </Button>
        <Popper
          open={openMenu}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={openMenu}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleModalSignup}>Inscription</MenuItem>
                    <MenuItem onClick={handleModalSignin}>Connexion</MenuItem>
                    <Link href="/profil">
                      <MenuItem onClick={handleClose}>Mon profil</MenuItem>
                    </Link>
                    <Link href="/house/1">
                      <MenuItem onClick={handleClose}>Mon logement</MenuItem>
                    </Link>
                    <Link href="/house/add">
                      <MenuItem onClick={handleClose}>
                        Créer un logement
                      </MenuItem>
                    </Link>
                    <MenuItem onClick={handleClose}>Déconnexion</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        {openModalSignup && (
          <div>
            {/* <Button onClick={handleOpenOrClose}>Inscription</Button> */}
            <Modal
              open={openModalSignup}
              onClose={handleOpenOrCloseForUp}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box className={styles.div_menu__modal}>
                <DialogTitle>Inscription</DialogTitle>
                <DialogContent>
                  <DialogContentText className={styles.padding}>
                    Veuillez renseigner les informations pour votre inscription
                    :
                  </DialogContentText>
                  <form className={styles.form_modal}>
                    <TextFormProfil />
                    <PasswordFormProfil />
                  </form>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleOpenOrCloseForUp}>Annuler</Button>
                  <Button type="submit" onClick={submitTheForm}>
                    Envoyer
                  </Button>
                </DialogActions>
              </Box>
            </Modal>
          </div>
        )}
        {openModalSignin && (
          <div>
            {/* <Button onClick={handleopenModal}>Connexion</Button> */}
            <Modal
              open={openModalSignin}
              onClose={handleOpenOrCloseForIn}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box className={styles.div_menu__modal}>
                <DialogTitle>Connexion</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Veuillez renseigner vos informations de connexion :
                  </DialogContentText>
                  <TextField
                    required
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Entrez votre email"
                    type="email"
                    name="email"
                    // error={!!inputError}
                    // helperText={inputError ? errorMail : null}
                    fullWidth
                    variant="standard"
                    // value={email}
                    // onChange={handleSignInInputChange}
                  />
                  {/* {errors.email && <p className='error'>{errors.email}</p>} */}

                  <TextField
                    required
                    margin="dense"
                    id="password"
                    label="Entrez votre mot de passe"
                    type="password"
                    name="password"
                    // error={!!inputError}
                    // helperText={inputError ? errorPassword : null}
                    fullWidth
                    variant="standard"
                    // value={password}
                    // onChange={handleSignInInputChange}
                  />
                  {/* {errors.password && <p className='error'>{errors.password}</p>} */}
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleOpenOrCloseForIn}>Annuler</Button>
                  <Button type="submit" onClick={submitSignInForm}>
                    Envoyer
                  </Button>
                </DialogActions>
              </Box>
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
}

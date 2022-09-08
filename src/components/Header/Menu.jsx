import React from "react";
import Image from "next/image";
import logoBurgerMenu from "../../../public/logo_burger_menu.png";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { MenuList, MenuItem, Popper, Paper, Grow } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import styles from "../../../styles/Header.module.css";
import imageLoader from "../../../imagesLoader";
import ModalSignup from "../Modal/ModalSignup";
import ModalSignin from "../Modal/ModalSignin";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setOpenModalSignup, setOpenModalSignin, setOpenMenu } from "../../reducers/booleans/slice";
import { useSetLogoutMutation } from "../../services/auth";

// styles pour le menu
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

const MenuListComposition = () => {
  const dispatch = useDispatch();
  const [setLogoutMutation] = useSetLogoutMutation();
  const classes = useStyles();
  const anchorRef = React.useRef(null);

  // Selector //
  const openMenu = useSelector(state => state.booleans.menu);
  const openModalSignin = useSelector(state => state.booleans.modalSignin);
  const openModalSignup = useSelector(state => state.booleans.modalSignup);
  const { houseDesc } = useSelector(state => state.houses);
  const { logged } = useSelector(state => state.auth);
  
  // Handle //
  const handleModalSignin = () => {
    dispatch(setOpenModalSignin(true));
    dispatch(setOpenMenu(false));
  };

  const handleModalSignup = () => {
    dispatch(setOpenModalSignup(true));
    dispatch(setOpenMenu(false));
  };

  const handleToggle = () => { dispatch(setOpenMenu((prevopenMenu) => !prevopenMenu)); };

  const handleClose = (event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target)
    ) {
      return;
    };
    dispatch(setOpenMenu(false));
  };

  const handleLogout = async (e) => {
    await setLogoutMutation();
    handleClose(e);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      dispatch(setOpenMenu(false));
    } else if (event.key === 'Escape') {
      dispatch(setOpenMenu(false));
    }
  };

  // useEffect //
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
                    {!logged && <>
                      <MenuItem onClick={handleModalSignup}>Inscription</MenuItem>
                      <MenuItem onClick={handleModalSignin}>Connexion</MenuItem>
                    </>}
                    {logged &&
                      <>
                        <Link href="/profil">
                          <MenuItem onClick={handleClose}>Mon profil</MenuItem>
                        </Link>
                        {houseDesc?.id ?
                            <Link href={`/house/${houseDesc.id}`}>
                              <MenuItem onClick={handleClose}>Mon logement</MenuItem>
                            </Link>
                            :
                            <Link href="/house/add">
                              <MenuItem onClick={handleClose}>
                                Créer un logement
                              </MenuItem>
                            </Link>
                        }
                        <MenuItem onClick={handleLogout}>Déconnexion</MenuItem>
                      </>
                    }
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        {openModalSignup && (<ModalSignup />)}
        {openModalSignin && (<ModalSignin />)}
      </div>
    </div>
  );
}

export default MenuListComposition;
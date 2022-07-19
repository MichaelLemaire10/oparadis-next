/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import Image from "next/image";
import imageLoader from "../../imagesLoader";
import logo from "../../public/logo_small.svg";
import styles from "../../styles/Header.module.css";
import DarkMode from "./Header/ButtonDarkMode";
import InputSearch from "./Header/InputSearch";
import MenuList from "./Header/Menu";

const Header = () => {
  const avatar = "https://res.cloudinary.com/dhwbw94lc/image/upload/v1655720026/mmtetrupmel5r4c8qcaf.png";

  return (
    <header className={styles.header}>
      <nav className={`${styles.div} ${styles.margin}`}>
        <Link href="/">
          <a className={styles.a}>
            <Image
              priority
              unoptimized
              className={styles.logo}
              loader={imageLoader}
              src={logo}
              alt="logo O'Paradis"
            />
          </a>
        </Link>
        <h1 className={styles.h1}>O'Paradis</h1>
      </nav>
      <div className={styles.div}>
        <InputSearch />
      </div>
      <div className={styles.div}>
        <DarkMode />
        <MenuList />
        <Image
          className={styles.div_avatar}
          loader={imageLoader}
          alt="image d'un avatar"
          src={avatar}
          width="40px"
          height="40px"
          unoptimized
        />
      </div>
    </header>
  );
};

export default Header;

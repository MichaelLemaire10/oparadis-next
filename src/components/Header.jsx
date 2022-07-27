/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "../../styles/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import imageLoader from "../../imagesLoader";
import logo from "../../public/logo_small.svg";
import DarkMode from "./Header/ButtonDarkMode";
import ImgAvatar from "./Image/ImgAvatar";
import InputSearch from "./Header/InputSearch";
import MenuList from "./Header/Menu";

const Header = () => {
  const custom = {
    width: "40px",
    height: "40px",
  };
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
        <ImgAvatar custom={custom} />
      </div>
    </header>
  );
};

export default Header;

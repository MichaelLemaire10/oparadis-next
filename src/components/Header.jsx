/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import Image from "next/image";
import imageLoader from "../../imagesLoader";
import logo from "../../public/logo_small.svg";
import styles from "../../styles/Header.module.css";
import MenuList from "./Header/Menu";
import DarkMode from "./Header/ButtonDarkMode";
import ImgAvatar from "./Image/ImgAvatar";

function Header() {
  const custom = {
    width: "40px",
    height: "40px",
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.div} ${styles.margin}`}>
        <Link href="/">
          <a className={styles.a}>
            <Image
              className={styles.logo}
              loader={imageLoader}
              unoptimized
              src={logo}
              priority
              alt="logo O'Paradis"
            />
          </a>
        </Link>
        <h1 className={styles.h1}>O'Paradis</h1>
      </nav>
      <div className={styles.div}>
        <div className={styles.div_handles}>
          <input
            className={styles.div_handles_input}
            type="text"
            placeholder="Où souhaitez-vous aller ?"
            defaultValue=""
            onChange={handleChange}
          />
          <Link href='/result-search'>
            <a className={styles.div_handles_link}>Rechercher</a> 
          </Link>
        </div>
      </div>
      <div className={styles.div}>
        <DarkMode />
        <MenuList />
        <ImgAvatar custom={custom} />
      </div>
    </header>
  );
}

export default Header;

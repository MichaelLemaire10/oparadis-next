/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import styles from "../../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/team">
        <a className={styles.a}>
          Team
        </a>
      </Link>
      <p>2022 - O'Paradis-©</p>
      <Link className={styles.a} href="/faq">
        <a className={styles.a}>
          Faq
        </a>
      </Link>
    </footer>
  );
}

export default Footer;

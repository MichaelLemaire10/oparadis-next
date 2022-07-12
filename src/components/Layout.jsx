/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../../styles/Home.module.css";

function Layout({ children }) {
  return (
    <div className={styles.container}>
     <Header />
       {children}
      <Footer />
    </div>
  );
}

export default Layout;

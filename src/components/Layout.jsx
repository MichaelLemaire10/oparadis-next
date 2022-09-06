/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "../../styles/Home.module.css";
import { useDispatch } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import { useGetUserQuery } from '../services/user';
import { setUser } from '../selectors/function';
import { setLogged } from "../reducers/auth/slice";

function Layout({ children }) {
  const dispatch = useDispatch();
  const { data } = useGetUserQuery();
  
  React.useEffect(() => {
    if (data) {
      setUser({ data, dispatch });
      dispatch(setLogged(true));
    };
  }, [data]);

  return (
    <div className={styles.container}>
     <Header />
       {children}
      <Footer />
    </div>
  );
}

export default Layout;

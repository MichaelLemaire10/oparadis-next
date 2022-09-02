/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "../../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import { useGetUserQuery } from '../services/user';
import { useSetLogoutMutation } from "../services/auth";
import { setUser } from '../selectors/function';
import { setLogged } from "../reducers/auth/slice";

function Layout({ children }) {
  const dispatch = useDispatch();
  // const { user } = useSelector(state => state.users);
  // const { logged } = useSelector(state => state.auth);
  const { data } = useGetUserQuery();
  console.log('data:', data);
  const [ setLogoutMutation, { error }] = useSetLogoutMutation();
  console.log('error:', error);
  
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

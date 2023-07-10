import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from './home.module.css'


const Home = () => {
  return (
    <div>
      <Header/>
      <div className={styles.mmm}></div>
      <Footer />
    </div>
  );
};

export default Home;

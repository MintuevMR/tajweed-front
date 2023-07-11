import React from "react";
import Header from "./Header";
import HomeMain from "./Home";
import Footer from "./Footer";
import styles from './home.module.css'


const Home = () => {
  return (
    <div className={styles.general}>
      <Header/>
      <HomeMain/>
      <Footer />
    </div>
  );
};

export default Home;

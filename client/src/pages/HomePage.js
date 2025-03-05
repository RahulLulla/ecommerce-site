import React from "react";
import HomeBanner from "../components/home/HomeBanner";
import Footer from "../components/footer/footer";
import MainSection from "../components/mainSection/MainSection";
import styles from "./HomePage.module.css";
import NavBar from "../components/navBar/NavBar";

const HomePage = () => {
  return (
    <div id="home" className={styles.home}>
      <NavBar />
      <HomeBanner />
      <MainSection />
      <Footer />
    </div>
  );
};

export default HomePage;

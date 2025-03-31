import React, { useEffect } from "react";
import HomeBanner from "../components/home/HomeBanner";
import MainSection from "../components/mainSection/MainSection";
import styles from "./HomePage.module.css";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";

const HomePage = () => {
  useEffect(() => {
    console.log("Fetch");
  });

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

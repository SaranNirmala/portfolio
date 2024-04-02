// eslint-disable-next-line no-unused-vars
import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <h1 className={styles.title}>Hi, I am Saranya</h1>
        <p className={styles.description}>
          I am actively seeking opportunities in MERN Stack development. With
          certifications and proficiency in these areas, I bring a dynamic
          approach to projects, committed to continuous learning and innovation.
          I am excited about the potential for growth and impact in the software
          development field.
        </p>
        <button className={styles.aboutBtn}>
          <Link
            to="https://docs.google.com/document/d/1IktMyvzC5FLlKzh6ACCNIkjbnH5UL2JJ/edit?usp=drive_link&ouid=116560687113400849791&rtpof=true&sd=true"
            target="blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            Resume
          </Link>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="homeImage"
        className={styles.homeImage}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </div>
  );
};

export default Home;

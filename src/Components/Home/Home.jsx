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
            to="https://drive.google.com/file/d/1jejkfttpzY24MoBPGOy9V8C_-hSm8W8o/view?usp=sharing"
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

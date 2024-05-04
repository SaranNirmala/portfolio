/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
import { Link } from "react-router-dom";
import dp from './family.jpg'

const About = () => {
    return(
        <section className={styles.container} id="about">
        <div className={styles.aboutItems}>
         {/* <h2 className={styles.title}>About</h2> */}
         <div className={styles.content}><img src={getImageUrl('about/aboutImage.png')} alt="MyWork" className={styles.workImage}/></div>
         {/* <div className={styles.content}><img src={dp} alt="MyWork" className={styles.workImage}/></div> */}
         </div>
        <ul className={styles.aboutItem}>
           <li> 
            <h4 className={styles.aboutTitle}>About Me</h4>
            <p className={styles.aboutContent}>Enthusiastic and skilled in Full Stack (MERN), I have completed a certification course. Eager to apply my knowledge and bring a dynamic approach to projects. Committed to learning, delivering impact solutions, creativity and contributing my skills to a collaborative team environment. Ready to embark on a journey of growth.</p></li>
            <div className={styles.certificate}>Got Certified in FSD(MERN)-GUVI(IITM)</div>
            <button className={styles.aboutBtn}><Link to='/certificate' target="blank"  style={{ textDecoration: "none", color: "white" }}>Certificates</Link><span></span><span></span><span></span><span></span></button>
        </ul> 
        
           
       
        </section>
    )
}

export default About;
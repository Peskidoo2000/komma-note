"use client";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import styles from "./about.module.css";

export default function About () {
    return (
        <div className={`container ${styles.aboutContainer}`}>
            <Header/>
            <div className={styles.aboutTextContainer}>
                <h6 className={styles.about}>work anywhere</h6>
                <p className={styles.about2}>keep important info handy
                ____your notes sync automatically to all device </p>
            </div>
            
            
            <div className={styles.phoneContainer}>
                <img src="/BenBois-iPhone-SVG.svg" alt="Ben Bois Logo" className={styles.Iphone}/>
                <div className={styles.phoneScreen}>
                <img src="/home screen app.JPG" alt="home-page screen" className={styles.screen}/>"
                </div>
                
            </div>
            <div className={styles.podiumContainer}>
                <img src="/podium 2.png" alt="podium" className={styles.podium}/>
            </div>
            <Footer/>
     </div>
    )
}
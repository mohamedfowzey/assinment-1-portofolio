import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <div
      className={`${styles.aboutContainer} container py-5 mt-lg-0 mt-3 d-lg-flex d-block flex-column justify-content-center`}
    >
      <section className={styles.aboutHeader} style={{ marginBottom: "2rem" }}>
        <p className={styles.aboutTitle}>ABOUT US</p>
        <h3 className={styles.aboutHeading}>WHO AM I?</h3>
        <p className={styles.aboutText}>
          Hi, I'm <strong>Jackson Ford</strong>. On her way she met a copy. The
          copy warned the Little Blind Text, that where it came from it would
          have been rewritten a thousand times and everything that was left from
          its origin would be the word "and" and the Little Blind Text should
          turn around and return to its own, safe country.
        </p>
        <p className={styles.aboutText}>
          Even the all-powerful Pointing has no control about the blind texts.
          It is an almost unorthographic life. One day however a small line of
          blind text by the name of Lorem Ipsum decided to leave for the far
          World of Grammar.
        </p>
      </section>

      <section className={`${styles.skillsSection} row`}>
        <div className={`col-sm-6 col-md-3`} >
          <div className={`${styles.skillBox} ${styles.one}`}>
            <i className="fa-regular fa-lightbulb fs-1 d-block mb-3"></i>
            <h4>Graphic Design</h4>
          </div>
        </div>
        <div className={`col-sm-6 col-md-3`} >
          <div className={`${styles.skillBox} ${styles.two}`}>
            {" "}
            <i className="fa-solid fa-earth-africa fs-1 d-block mb-3"></i>
            <h4>Web Design</h4>
          </div>
        </div>
        <div className={`col-sm-6 col-md-3`}>
          <div className={`${styles.skillBox} ${styles.three}`}>
            {" "}
            <i className="fa-solid fa-database fs-1 d-block mb-3"></i>
            <h4>Software</h4>
          </div>
        </div>
        <div className={`col-sm-6 col-md-3`}>
          <div className={`${styles.skillBox} ${styles.four}`}>
            {" "}
            <i className="fa-solid fa-mobile-screen-button fs-1 d-block mb-3"></i>
            <h4>Application</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

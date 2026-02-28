import styles from "./skills.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Skills = () => {
  return (
    <div
      className={`${styles.skillsContainer} container py-5 mt-lg-0 mt-3 d-lg-flex d-block flex-column justify-content-center vh-100`}
    >
      <p className={styles.skillsTitle}>My Speciality</p>
      <h2 className={styles.skillsHeading}>my skills</h2>
      <p className={styles.skillsText}>
        The Big Oxmox advised her not to do so, because there were thousands of
        bad Commas, wild Question Marks and devious Semikoli, but the Little
        Blind Text didn’t listen. She packed her seven versalia, put her initial
        into the belt and made herself on the way.
      </p>
      <div className="row">
        <div className="col-md-6 col-12">
          <h2 className={styles.skillsSubHeading}>photo shop </h2>
          <div
            className="progress "
            style={{ height: "7px", backgroundColor: "#99a3bb", overflow: "visible" }}
          >
            <div
              className={`progressBar  ${styles.myprogressBar} ${styles.one}`}
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              
            </div>
          </div>
        </div>
      
      
        <div className="col-md-6 col-12">
          <h2 className={styles.skillsSubHeading}> HTML5 </h2>
          <div
            className="progress "
            style={{ height: "7px", backgroundColor: "#99a3bb", overflow: "visible" }}
          >
            <div
              className={`progressBar  ${styles.myprogressBar} ${styles.two}`}
              role="progressbar"
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"   
            >
              
            </div>
          </div>
        </div>
        {/* -------------------------------------------------------------------- */}
        <div className="col-md-6 col-12">
          <h2 className={styles.skillsSubHeading}> word press </h2>
          <div
            className="progress "
            style={{ height: "7px", backgroundColor: "#99a3bb", overflow: "visible" }}
          >
            <div
              className={`progressBar  ${styles.myprogressBar} ${styles.three}`}
              role="progressbar"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"   
            >
              
            </div>
          </div>
        </div>
        {/* -------------------------------------------------- */}
        {/* -------------------------------------------------------------------- */}
        <div className="col-md-6 col-12">
          <h2 className={styles.skillsSubHeading}> jquery </h2>
          <div
            className="progress "
            style={{ height: "7px", backgroundColor: "#99a3bb", overflow: "visible" }}
          >
            <div
              className={`progressBar  ${styles.myprogressBar} ${styles.four}`}
              role="progressbar"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"   
            >
              
            </div>
          </div>
        </div>
        {/* -------------------------------------------------- */}
        {/* -------------------------------------------------------------------- */}
        <div className="col-md-6 col-12">
          <h2 className={styles.skillsSubHeading}> css3 </h2>
          <div
            className="progress "
            style={{ height: "7px", backgroundColor: "#99a3bb", overflow: "visible" }}
          >
            <div
              className={`progressBar  ${styles.myprogressBar} ${styles.five}`}
              role="progressbar"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"   
            >
              
            </div>
          </div>
        </div>
        {/* -------------------------------------------------- */}
        {/* -------------------------------------------------------------------- */}
        <div className="col-md-6 col-12">
          <h2 className={styles.skillsSubHeading}> ceo </h2>
          <div
            className="progress "
            style={{ height: "7px", backgroundColor: "#99a3bb", overflow: "visible" }}
          >
            <div
              className={`progressBar  ${styles.myprogressBar} ${styles.six}`}
              role="progressbar"
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"   
            >
              
            </div>
          </div>
        </div>
        {/* -------------------------------------------------- */}
      </div>
    </div>
  );
};
export default Skills;

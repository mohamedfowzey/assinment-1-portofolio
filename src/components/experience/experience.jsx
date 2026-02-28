import styles from "./experience.module.css"
const Experience = () => {
    return (
        <div className="container py-5">   
            <p className={styles.exTitle}>experience</p>
            <h2 className={styles.exHeading}>WORK EXPERIENCE</h2>
            <ul className={styles.timeLine}>
                <li>
                    <div className={styles.bedge}>
                        <i className="fa-solid fa-pencil"></i>
                    </div>
                    <div className={styles.panel}>
                        <h2 className="p-0 m-0 mb-3 fw-normal fs-5">Full Stack Developer <span className="fs-6 fw-light text-black-50">2017-2018</span></h2>
                        <p className="fs-6 fw-lighter text-black-50">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>

                    </div>
                </li>
                <li>
                    <div className={`${styles.bedge} ${styles.bgRed}`}>
                        <i className="fa-solid fa-pencil"></i>
                    </div>
                    <div className={styles.panel}>
                        <h2 className="p-0 m-0 mb-3 fw-normal fs-5">Full Stack Developer <span className="fs-6 fw-light text-black-50">2017-2018</span></h2>
                        <p className="fs-6 fw-lighter text-black-50">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>

                    </div>
                </li>
                <li>
                    <div className={`${styles.bedge} ${styles.bgYellow}`}>
                        <i className="fa-solid fa-pencil"></i>
                    </div>
                    <div className={styles.panel}>
                        <h2 className="p-0 m-0 mb-3 fw-normal fs-5">Full Stack Developer <span className="fs-6 fw-light text-black-50">2017-2018</span></h2>
                        <p className="fs-6 fw-lighter text-black-50">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>

                    </div>
                </li>
            </ul>
        </div>
    );
}   
export default Experience;
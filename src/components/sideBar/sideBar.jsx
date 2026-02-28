// import profile from "../../assets/react.svg";
import { Link } from "react-router-dom";
import styles from "./sideBar.module.css";
import profile from "../../assets/about-bgAkqdr2.jpg";

const SideBar = ({toggleMenu}) => {
  return <>

      <div className={styles.sideBarContainer}>
        <div className={styles.profile}>
          <img src={profile} alt="profile" />
          <h5>Mohamed Fowzey</h5>
          <p><Link to='/' onClick={toggleMenu}> UI/UX/Designer</Link> in philippines</p>
        </div>
        <div className={styles.menu}>
          <ul>
            <li className={location.pathname === "/" ? styles.active : ""}><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li className={location.pathname === "/about" ? styles.active : ""}><Link to="/about" onClick={toggleMenu}>About</Link></li>
            <li className={location.pathname === "/skills" ? styles.active : ""}><Link to="/skills" onClick={toggleMenu}>Skills</Link></li>
            <li className={location.pathname === "/experience" ? styles.active : ""}><Link to="/experience" onClick={toggleMenu}>Experience</Link></li>
            <li className={location.pathname === "/work" ? styles.active : ""}><Link to="/work" onClick={toggleMenu}>Work</Link></li>
          </ul>
        </div>
      </div>
  </>;
};
export default SideBar;

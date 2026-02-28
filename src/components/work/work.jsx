import { Link, Outlet } from "react-router-dom";
import styles from "./work.module.css"

const Work = () => {
  return (
    <div className="class=container p-5 mt-lg-0 mt-3">
        <p className={`${styles.workTitle}`}>MY WORK</p>
        <h2 className={`${styles.workHeading}`}>RECENT WORK</h2>
      <ul className="nav mb-2">
        <li className="nav-item">
          <Link className="nav-link ps-0 active" aria-current="page" to="graphic">
            graphic
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ps-0" to="apps">
            apps
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ps-0" to="software">
            software
          </Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
};
export default Work;

import { Outlet } from "react-router-dom";
import SideBar from "../sideBar/sideBar";
import styles from"./masterLayout.module.css";
import { useState } from "react";
const Masterlayout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
  return (
    <div className={styles.masterLayoutContainer}>
      <div className="row m-0">
           <i className={`${styles.menuIcon} ${isOpen?styles.hide:''} fa-solid fa-bars`} onClick={toggleMenu}></i>
        <div className={`col-sm-3 ${styles.sideBarContainer} ${isOpen?styles.active:''}`}><SideBar toggleMenu = {toggleMenu}/></div>
        <div className={`col-sm-9 p-0 px-5 ${styles.mainContent}`}><Outlet /></div>
      </div>
    </div>
  );
};
export default Masterlayout;

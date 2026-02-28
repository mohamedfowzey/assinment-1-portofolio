
import {  useEffect, useState } from "react";
import img1 from "../../assets/img_bg_1-PzvG2r05.jpg";
import img2 from "../../assets/img_bg_2-DzCs5o-0.jpg";
import styles from "./home.module.css";

const Home = () => {
  const listOfImages = [img1, img2];
  let [imageInView, setImageInView] = useState(0);
  
  useEffect(() => {
    console.log("use effect");
     const interval = setInterval(() => {
      setImageInView((prev) => (prev === listOfImages.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {/* <img src={listOfImages[imageInView]} alt="background" className={`${styles.homeBg} `}  /> */}
      {/* <button onClick={showNextImage}>Next Image</button> */}
      <div className = {styles.content} style={{backgroundImage:`url(${listOfImages[imageInView]})`}}>
        <h1>My Portfolio </h1>
          <p>Lorem ipsum dolor sit amet.</p>
          <button className="btn btn-outline-dark">View Projects</button>
      </div>
    </div>
  );
}
export default Home;
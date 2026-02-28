import { useState } from "react";
import img1 from "../../../assets/img-1-C4nS0eD8.jpg";
import img2 from "../../../assets/img-2-D-4H1m4L.jpg";
import img3 from "../../../assets/img-3-pR2ZEVY9.jpg";
import img4 from "../../../assets/img-4-tHccITd-.jpg";
import img5 from "../../../assets/img-5-lAucr__a.jpg";
import img6 from "../../../assets/img-6-DFW03AZ3.jpg";

import styles from "../work.module.css";
const Graphic = () => {
    let [isOpen,setIsOpen] = useState(false);
  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <>
      <div >
        <div className="row ">
          {images.map((img,i) => {
            return (
              <div
                key={i}
                className={`${styles.imgContainer} col-md-6 position-relative p-0 ${
                    i>3? isOpen? 'd-block' : 'd-none' : ''
                }`}
              >
                <img src={img} className="img-fluid" />
                <div
                  className={`${styles.overLay} ps-4 pe-4 pt-4 w-100 h-100 position-absolute top-0 start-0 bg-primary d-flex flex-column justify-content-between align-items-start `}
                >
                  <div className="heading">
                    <h3>
                      <a className="text-white fw-light" href="#">
                        Work2
                      </a>
                    </h3>
                    <span className="text-white">animation</span>
                  </div>
                  <div className="icons">
                    <span>
                      <a
                        className="text-black bg-light me-3 d-inline-block rounded p-1 fs-6 "
                        href="#"
                      >
                        <i className="fa-solid fa-share-nodes"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        className="text-black bg-light me-3 d-inline-block rounded p-1 fs-6 "
                        href="#"
                      >
                        <i className="fa-regular fa-eye"></i>100
                      </a>
                    </span>
                    <span>
                      <a
                        className="text-black bg-light me-3 d-inline-block rounded p-1 fs-6"
                        href="#"
                      >
                        <i className="fa-regular fa-heart"></i>46
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          <button className="btn btn-primary w-auto mt-4" onClick={()=>{setIsOpen(!isOpen)}}> {isOpen? 'show less' : 'show more'} </button>
        </div>
      </div>
    </>
  );
};
export default Graphic;

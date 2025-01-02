import React, { useEffect } from 'react'
import styles from './Home.module.scss'
import images from "../../assets/images1.svg";
export default function Home() {
  
    useEffect(() => {
            document.title = "Home";
      }, [])
  return (
    <>
      <div
        className={`${styles.bgHome} flex-column  d-flex justify-content-center align-items-center align-content-center`}
      >
        <img src={images} className={styles.widthImage} alt="" />
        <h1 className="text-uppercase text-white fw-bold fa-2 mt-5">
          start Framework
        </h1>
        <div className="d-flex align-items-center justify-content-center mt-1 mb-3">
          <div className={`${styles.line} me-3`}></div>
          <i className="fa-solid fa-star text-white"></i>
          <div className={`${styles.line} ms-3`}></div>
        </div>
        <p className="text-white">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </>
  );
}

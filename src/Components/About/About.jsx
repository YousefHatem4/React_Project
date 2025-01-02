import React, { useEffect } from 'react'
import styles from './About.module.scss'
export default function About() {
  useEffect(() => {
        document.title = "About";
  }, [])
  
  return (
    <>
  

      <section
        className={`${styles.bgAbout} flex-column  d-flex justify-content-center align-items-center align-content-center `}
      >
        <h1 className="text-uppercase text-white fw-bold fa-2 mt-5">
          about component
        </h1>
        <div className="d-flex align-items-center justify-content-center mt-1 mb-3">
          <div className={`${styles.line} me-3`}></div>
          <i className="fa-solid fa-star text-white"></i>
          <div className={`${styles.line} ms-3`}></div>
        </div>
        <div className="text-white w-75 d-flex justify-content-center align-items-center gap-2">
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </section>
    </>
  );
}

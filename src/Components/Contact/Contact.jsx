import React, { useEffect } from "react";
import styles from "./Contact.module.scss";
export default function Contact() {
  
   useEffect(() => {
          document.title = "Contact";
    }, [])
  return (
    <>
      <section className={`${styles.bgContact}`}>
        <div className="container">
          <div className="row">
            <h1
              className={`text-center ${styles.color} text-uppercase fw-bold fa-2 mt-4`}
            >
              conatct section
            </h1>
            <div
              className={`${styles.color} d-flex align-items-center justify-content-center mt-1 mb-3`}
            >
              <div className={`${styles.line} me-3`}></div>
              <i className={`${styles.color} fa-solid fa-star`}></i>
              <div className={`${styles.line} ms-3`}></div>
            </div>
          </div>

          <div
            className={` ${styles.margin}  flex-column d-flex justify-content-center align-items-center`}
          >
            <div className="w-50 flex-column d-flex justify-content-center align-items-center">
              <input
                type="text"
                className={`mb-5 ps-3 pb-3 ${styles.width} ${styles["form-control"]} form-control  border-top-0 border-start-0 border-end-0`}
                placeholder="userName"
              />

              <input
                type="number"
                className={`mb-5 ps-3 pb-3 ${styles.width}  ${styles["form-control"]}  form-control  border-top-0 border-start-0 border-end-0`}
                placeholder="userAge"
              />

              <input
                type="email"
                className={`mb-5 ps-3 pb-3 ${styles.width}  ${styles["form-control"]}  form-control  border-top-0 border-start-0 border-end-0`}
                placeholder="userEmail"
              />

              <input
                type="password"
                className={` mb-4 ps-3 pb-3 ${styles.width}  ${styles["form-control"]}  form-control  border-top-0 border-start-0 border-end-0`}
                placeholder="userPassword"
              />

              <button
                type="button"
                className={`${styles["btn-secondary"]} py-2 px-3 rounded rounded-3 text-white me-auto`}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

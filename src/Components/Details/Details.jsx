import React from 'react'
import styles from './Details.module.scss'
export default function Details() {
  return (
    <>
      <section className={`${styles.bgDetails}`}>
        <div className="container">
          <div className="row m-4 g-5 ">
            <div className="col-md-4">
              <div className="text-center">
                <h3 className={`text-uppercase text-white`}> location</h3>
                <p className="text-white">2215 John Daniel Drive</p>
                <p className="text-white">Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <h3 className={`text-uppercase text-white`}> AROUND THE WEB</h3>
                <div>
                  <i
                    className={`fa-brands fa-facebook text-white me-2 ${styles.icon}`}
                  />
                  <i
                    className={`fa-brands fa-twitter text-white me-2 ${styles.icon}`}
                  />
                  <i
                    className={`fa-brands fa-linkedin text-white me-2 ${styles.icon}`}
                  />
                  <i
                    className={`fa-solid fa-earth-americas text-white ${styles.icon}`}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <h3 className={`text-uppercase text-white`}>
                  ABOUT FREELANCER
                </h3>
                <p className="text-white">
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

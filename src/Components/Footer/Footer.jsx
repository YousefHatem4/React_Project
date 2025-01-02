import React from 'react'
import styles from './Footer.module.scss'
export default function Footer() {
  return (
    <>
      <section className={`${styles.bgFooter}`}>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <p className='text-white pt-2'>Copyright © Your Website 2021</p>
          </div>
        </div>
      </section>
    </>
  );
}

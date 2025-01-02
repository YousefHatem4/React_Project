import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Details from '../Details/Details';
import Navbar from '../Navbar/Navbar';
import styles from './Layout.module.scss'
export default function Layout() {
    return (
      <>
        <Navbar />
        <div className={`${styles.margin}`}>
          <Outlet></Outlet>
        </div>
        <Details />
        <Footer />
      </>
    );
}

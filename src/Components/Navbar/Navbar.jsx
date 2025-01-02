import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed-top navbar ${
          isScrolled ? styles.scrolled : "py-4"
        } navbar-expand-lg ${styles["bg-body-tertiary"]}`}
      >
        <div className="container">
          <NavLink
            to={"/"}
            className={`text-decoration-none text-uppercase ${styles.logo}`}
          >
            Start Framework
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pe-4">
              <li className="nav-item pe-3">
                <NavLink
                  to={"about"}
                  className={`nav-link text-uppercase text-white fw-bolder`}
                  aria-current="page"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item pe-3">
                <NavLink
                  to={"portfolio"}
                  className={`nav-link text-uppercase text-white fw-bolder `}
                >
                  portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"contact"}
                  className={`nav-link text-uppercase text-white fw-bolder  `}
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

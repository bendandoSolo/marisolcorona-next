import React, { useState, useEffect } from "react";
import Link from "next/link";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  // Scroll Navbar animation
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll(event) {
    let pageOffset = window.pageYOffset;
    if (pageOffset > 20) {
      document.querySelector("nav").classList.add("nav-scroll");
    } else {
      document.querySelector("nav").classList.remove("nav-scroll");
    }
  }

  // Collapses navbar once navlink is clicked.
  render() {
    const closeNav = () => {
      let nav = document.getElementById("navbarNav");
      nav.classList.remove("show");
    };

    return (
      <div>
        <nav className="navbar navbar-expand-lg py-2 fixed-top">
          <div className="container">
            <Link href="/">
              <a className="navbar-brand">Marisol Corona</a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link href="/">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      onClick={closeNav}
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/individual">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      onClick={closeNav}
                    >
                      Terapia Individual
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/workshop">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      onClick={closeNav}
                    >
                      Workshops
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/programas">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      onClick={closeNav}
                    >
                      Programas
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/testimonios">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      onClick={closeNav}
                    >
                      Testimonios
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      onClick={closeNav}
                    >
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

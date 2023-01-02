import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg background sticky-top">
          <div className="container-fluid ">
            <Link className="navbar-brand text-center text-light " to="/">
              Covid Vac
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active text-light"
                    aria-current="page"
                    to="./Component/DashBoard">DashBoard</Link>

                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/Registration">
                    Registration</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light hover-success" to="/Vaccine">
                  Vaccine</Link>
                </li>
                
               
               
                </ul>
               
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success text-light"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

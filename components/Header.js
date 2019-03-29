import React from "react";
// import homeIcon from "static/homeIcon.png";
import LinkSmoothScroll from "./LinkSmoothScroll";

export default () => {
  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main navigation"
      style={{ letterSpacing: 1.04, fontSize: 16 }}
    >
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            {/* <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div> */}
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button" style={{ backgroundColor: "#ffcd8a" }}>
                  <strong>สมัครสมาชิก</strong>
                </a>
                <a className="button is-light">ล็อคอิน</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

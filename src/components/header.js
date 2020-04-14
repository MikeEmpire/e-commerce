// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Logo from "./Images/logo"

const Header = () => {
  const [isOpen, toggleMenu] = useState(false)
  return (
    <header id="header" className={isOpen ? "home responsive-block-on" : "home"}>
      <div className="responsive-block">
        <div className="responsive-block-content">
          <a
            href="#"
            className="responsive-block-close"
            onClick={() => toggleMenu(false)}
          ></a>
          <nav id="responsive-nav">
            <ul>
              <li className="text-fx-btn rotate-x-360 top-nav-el first-child">
                <a href="#music" className="trans-10 text-fx-btn-x finished">
                  <p>
                    <span
                      className="trans-12"
                      style={{ transitionDelay: "0s" }}
                    >
                      M
                    </span>
                  </p>
                  <p>
                    <span
                      className="trans-12"
                      style={{ transitionDelay: "0.022222222222222223s" }}
                    >
                      u
                    </span>
                  </p>
                  <p>
                    <span
                      className="trans-12"
                      style={{ transitionDelay: "0.044444444444444446s" }}
                    >
                      s
                    </span>
                  </p>
                  <p>
                    <span
                      className="trans-12"
                      style={{ transitionDelay: "0.06666666666666667s" }}
                    >
                      i
                    </span>
                  </p>
                  <p>
                    <span
                      className="trans-12"
                      style={{ transitionDelay: "0.08888888888888889s" }}
                    >
                      c
                    </span>
                  </p>
                </a>
              </li>
              <li className="text-fx-btn rotate-x-360 top-nav-el first-child">
                <a href="#bio" className="trans-10 text-fx-btn-x finished">
                  <p>
                    <span
                      className="trans-12"
                      style={{ transitionDelay: "0s" }}
                    >
                      B
                    </span>
                  </p>
                  <p>
                    <span
                      className="trans-12"
                      style={{ transitionDelay: "0.022222222222222223s" }}
                    >
                      i
                    </span>
                  </p>
                  <p>
                    <span
                      className="trans-12"
                      style={{ transitionDelay: "0.044444444444444446s" }}
                    >
                      o
                    </span>
                  </p>
                </a>
              </li>
              <li className="text-fx-btn rotate-x-360 top-nav-el first-child">
                <a href="#contact" className="trans-10 text-fx-btn-x finished">
                  <p>
                    <span
                      className="trans-12"
                      style={{ transitionDelay: "0s" }}
                    >
                      C
                    </span>
                  </p>
                  <p>
                    <span
                      className="trans-12"
                      style={{ transitionDelay: "0.022222222222222223s" }}
                    >
                      o
                    </span>
                  </p>
                  <p>
                    <span
                      className="trans-12"
                      style={{ transitionDelay: "0.044444444444444446s" }}
                    >
                      n
                    </span>
                  </p>
                  <p>
                    <span
                      className="trans-12"
                      style={{ transitionDelay: "0.06666666666666667s" }}
                    >
                      t
                    </span>
                  </p>
                  <p>
                    <span
                      className="trans-12"
                      style={{ transitionDelay: "0.08888888888888889s" }}
                    >
                      a
                    </span>
                  </p>
                  <p>
                    <span
                      className="trans-12"
                      style={{ transitionDelay: "0.1111111111111111s;" }}
                    >
                      c
                    </span>
                  </p>
                  <p>
                    <span
                      className="trans-12"
                      style={{ transitionDelay: "0.13333333333333333s;" }}
                    >
                      t
                    </span>
                  </p>
                </a>
              </li>
            </ul>
          </nav>
          <div id="responsive-social">
            <div id="responsive-social">
              <div className="social-icons trans-10 show-fx delay-01 on">
                <a href="#" className="circle-btn">
                  <svg
                    className="circle-svg"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                  >
                    <circle
                      className="circle"
                      cx="25"
                      cy="25"
                      r="23"
                      stroke="#fff"
                      stroke-width="1"
                      fill="none"
                    ></circle>
                  </svg>
                  <span className="icon icon-facebook"></span>
                </a>

                <a href="#" className="circle-btn">
                  <svg
                    className="circle-svg"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                  >
                    <circle
                      className="circle"
                      cx="25"
                      cy="25"
                      r="23"
                      stroke="#fff"
                      stroke-width="1"
                      fill="none"
                    ></circle>
                  </svg>
                  <span className="icon icon-twitter"></span>
                </a>
                <a href="#" className="circle-btn">
                  <svg
                    className="circle-svg"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                  >
                    <circle
                      className="circle"
                      cx="25"
                      cy="25"
                      r="23"
                      stroke="#fff"
                      stroke-width="1"
                      fill="none"
                    ></circle>
                  </svg>
                  <span className="icon icon-Beatport"></span>
                </a>
                <a href="#" className="circle-btn">
                  <svg
                    className="circle-svg"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                  >
                    <circle
                      className="circle"
                      cx="25"
                      cy="25"
                      r="23"
                      stroke="#fff"
                      stroke-width="1"
                      fill="none"
                    ></circle>
                  </svg>
                  <span className="icon icon-bandcamp"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="responsive-block-layer"></div>
      <div id="main-nav">
        <div className="nav-container">
          <a href="#intro" id="logo" className="smooth-scroll skew-fx">
            {/* <Logo className="logo-light" /> */}
          </a>

          <nav id="icon-nav">
            <ul>
              <li className="responsive-trigger-wrap">
                <a href="#" className="circle-btn responsive-trigger">
                  <svg
                    className="circle-svg"
                    width="40"
                    height="40"
                    viewBox="0 0 50 50"
                    onClick={() => toggleMenu(true)}
                  >
                    <circle
                      className="circle"
                      cx="25"
                      cy="25"
                      r="23"
                      stroke="#fff"
                      strokeWidth="1"
                      fill="none"
                    ></circle>
                  </svg>
                  <span className="icon"></span>
                </a>
              </li>
              <li className="cart-trigger-wrap">
                <a href="#show-cart" className="cart-btn circle-btn">
                  <svg
                    className="circle-svg"
                    width="40"
                    height="40"
                    viewBox="0 0 50 50"
                  >
                    <circle
                      className="circle"
                      cx="25"
                      cy="25"
                      r="23"
                      stroke="#fff"
                      strokeWidth="1"
                      fill="none"
                    ></circle>
                    <circle
                      className="circle-bg"
                      cx="25"
                      cy="25"
                      r="23"
                      stroke="#fff"
                      strokeWidth="1"
                      fill="none"
                    ></circle>
                  </svg>
                  <span className="pe-7s-cart"></span>
                </a>
              </li>
              <li className="search-trigger-wrap">
                <a href="#" id="nav-search" className="circle-btn">
                  <svg
                    className="circle-svg"
                    width="40"
                    height="40"
                    viewBox="0 0 50 50"
                  >
                    <circle
                      className="circle"
                      cx="25"
                      cy="25"
                      r="23"
                      stroke="#fff"
                      strokeWidth="1"
                      fill="none"
                    ></circle>
                  </svg>
                  <span className="pe-7s-search"></span>
                </a>
              </li>
              <li className="social-trigger-wrap">
                <a href="#" id="nav-social" className="circle-btn">
                  <svg
                    className="circle-svg"
                    width="40"
                    height="40"
                    viewBox="0 0 50 50"
                  >
                    <circle
                      className="circle"
                      cx="25"
                      cy="25"
                      r="23"
                      stroke="#fff"
                      strokeWidth="1"
                      fill="none"
                    ></circle>
                  </svg>
                  <span className="pe-7s-share"></span>
                </a>
              </li>
            </ul>
          </nav>

          <nav id="nav">
            <ul>
              <li className="text-fx-btn rotate-x-360">
                <a href="#music" className="trans-10 text-fx-btn-x">
                  Music
                </a>
              </li>
              <li className="text-fx-btn rotate-x-360">
                <a href="#bio" className="trans-10 text-fx-btn-x">
                  Bio
                </a>
              </li>
              <li className="text-fx-btn rotate-x-360">
                <a href="#contact" className="trans-10 text-fx-btn-x">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div> */}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div class="responsive-block">
      <div class="responsive-block-content">
        <a href="#" class="responsive-block-close"></a>
        <nav id="responsive-nav"></nav>
        <div id="responsive-social"></div>
      </div>
    </div>
    <div class="responsive-block-layer"></div>
    <div id="main-nav">
      <div className="nav-container">
        <a href="#intro" id="logo" className="smooth-scroll skew-fx">
          <img src="images/logo-light.svg" alt="Logo" className="logo-light" />
          <img src="images/logo.svg" alt="Logo" className="logo-dark" />
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
                    stroke-width="1"
                    fill="none"
                  ></circle>
                  <circle
                    className="circle-bg"
                    cx="25"
                    cy="25"
                    r="23"
                    stroke="#fff"
                    stroke-width="1"
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
                    stroke-width="1"
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
                    stroke-width="1"
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
              <a href="#" className="trans-10 text-fx-btn-x">
                Features
              </a>
              <ul>
                <li>
                  <a href="grid.html" className="ajax-link">
                    Grid
                  </a>
                </li>
                <li>
                  <a href="media.html" className="ajax-link">
                    Media
                  </a>
                </li>
                <li>
                  <a href="elements.html" className="ajax-link">
                    Elements
                  </a>
                </li>
                <li>
                  <a href="404.html" className="ajax-link">
                    404 Error
                  </a>
                </li>
                <li>
                  <a href="#newsletter">Newsletter</a>
                </li>
                <li>
                  <a href="#">Sub Menu</a>
                  <ul>
                    <li>
                      <a href="#">Level 2.1</a>
                    </li>
                    <li>
                      <a href="#">Level 2.2</a>
                    </li>
                    <li>
                      <a href="#">Level 2.3</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="text-fx-btn rotate-x-360">
              <a href="#music" className="trans-10 text-fx-btn-x">
                Music
              </a>
            </li>
            <li className="text-fx-btn rotate-x-360">
              <a href="#events" className="trans-10 text-fx-btn-x">
                Events
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

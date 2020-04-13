import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="site">
      <div className="section single-page">
        <div id="ajax-container" className="page-container page-404">
          <div className="intro intro-empty"></div>

          <div className="page-content">
            <div className="container">
              <h1 className="error-title">
                <span data-parallax='{"y": -60}'>4</span>
                <span data-parallax='{"y": -30}'>0</span>
                <span data-parallax='{"y": 20}'>4</span>
              </h1>

              <h2 className="error-subtitle" data-parallax='{"y": 20}'>
                The requested page could not be found. I recommend using the
                navigation bar.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <footer id="footer">
        <div className="container">
          <div id="copyrights">
            &copy; Copyright 2018 MELOO. Powered by Rascals Themes. Handcrafted
            in Europe.
          </div>
        </div>
      </footer>
    </div>
  </Layout>
)

export default NotFoundPage

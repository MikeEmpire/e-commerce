import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Splash from "../components/splash"
import Shop from '../components/shop'
import Bio from '../components/bio';
import Contact from '../components/contact';
import Footer from '../components/footer';
import { ParallaxProvider } from "react-scroll-parallax"

const IndexPage = () => (
  <ParallaxProvider>
    <Layout>
      <SEO title="Home" />
      <Splash />
      <Shop />
      <Bio />
      <Contact />
      <Footer />
      {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  </ParallaxProvider>
)

export default IndexPage

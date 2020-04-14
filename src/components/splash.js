import React from "react"
// import PropTypes from "prop-types"
import { Parallax } from "react-scroll-parallax"

const Splash = () => (
  <Parallax y={[0, 0]}>
    <div id="intro" className="intro intro-01 intro-fullscreen clearfix">
    <div className="intro-image trans-20">
      {/* <img className="hidden" src={IntroImage} /> */}
    </div>
    <span className="scroll-discover">
      <span className="icon icon-line-arrow-left"></span> Scroll to discover
    </span>
  </div>
  </Parallax>
)

export default Splash

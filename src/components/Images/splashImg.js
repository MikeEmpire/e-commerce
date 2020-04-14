import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Image = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "intro-image-01.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
  }
  
  export default Image
  
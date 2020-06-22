import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  gallery: {
    display: "flex",
    flexWrap: "wrap",
    margin: "48px 0",
  },
  customImg: {
    flexBasis: "25%",
  },
})

const Gallery = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      addisonOne: file(relativePath: { eq: "images/addisonandteddy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      evieOne: file(relativePath: { eq: "images/evie.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      evieTwo: file(relativePath: { eq: "images/evieandcharlie.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      addisonTwo: file(relativePath: { eq: "images/meandaddison.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      addisonThree: file(relativePath: { eq: "images/meandaddison2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      charlieOne: file(relativePath: { eq: "images/meandcharlie.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      evieThree: file(relativePath: { eq: "images/meandevie.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      threekids: file(relativePath: { eq: "images/threekids.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      profile: file(relativePath: { eq: "images/profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={classes.gallery}>
      <Img
        fluid={data.addisonOne.childImageSharp.fluid}
        className={classes.customImg}
      />
      <Img
        fluid={data.evieOne.childImageSharp.fluid}
        className={classes.customImg}
      />
      <Img
        fluid={data.evieTwo.childImageSharp.fluid}
        className={classes.customImg}
      />
      <Img
        fluid={data.addisonTwo.childImageSharp.fluid}
        className={classes.customImg}
      />
      <Img
        fluid={data.addisonThree.childImageSharp.fluid}
        className={classes.customImg}
      />
      <Img
        fluid={data.charlieOne.childImageSharp.fluid}
        className={classes.customImg}
      />
      <Img
        fluid={data.evieThree.childImageSharp.fluid}
        className={classes.customImg}
      />
      <Img
        fluid={data.threekids.childImageSharp.fluid}
        className={classes.customImg}
      />
    </div>
  )
}

export default Gallery

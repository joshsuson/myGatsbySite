import React from "react"
import { graphql } from "gatsby"
import { Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../templates/layout"
import Img from "gatsby-image"

const useStyles = makeStyles({
  customContainer: {
    padding: "24px 0",
    marginBottom: "24px",
  },
  customImage: {
    width: "40%",
    borderRadius: "5px",
    border: "10px solid #3e3e3e",
  },
  jumbotron: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "space-around",
  },
  customHeadline: {
    flexBasis: "40%",
  },
})

const HomePage = ({ data }) => {
  const classes = useStyles()
  return (
    <Layout>
      <Container className={classes.customContainer}>
        <div className={classes.jumbotron}>
          <Typography
            variant="h1"
            align="right"
            className={classes.customHeadline}
          >
            Father/ Husband/ Developer/ Storyteller
          </Typography>
          <Img
            fluid={data.file.childImageSharp.fluid}
            className={classes.customImage}
            imgStyle={{ borderRadius: "5px" }}
          />
        </div>
        <div></div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "images/family.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default HomePage

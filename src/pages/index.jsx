import React from "react"
import { graphql } from "gatsby"
import { Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../templates/layout"
import CustomCard from "../components/customCard"
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

  cardDiv: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    margin: "48px 0",
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
            fluid={data.family.childImageSharp.fluid}
            className={classes.customImage}
            imgStyle={{ borderRadius: "5px" }}
          />
        </div>
        <div className={classes.cardDiv}>
          <CustomCard
            image={data.husband.childImageSharp.fluid}
            titleText="Father/Husband"
            excerptText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quam purus, pulvinar et lorem a, fermentum dapibus libero. Ut eget felis at magna aliquam dictum."
            buttonText="More About Me"
            link="/about"
          />
          <CustomCard
            image={data.develop.childImageSharp.fluid}
            titleText="Developer"
            excerptText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quam purus, pulvinar et lorem a, fermentum dapibus libero. Ut eget felis at magna aliquam dictum."
            buttonText="My Projects"
            link="/projects"
          />
          <CustomCard
            image={data.story.childImageSharp.fluid}
            titleText="Storyteller"
            excerptText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quam purus, pulvinar et lorem a, fermentum dapibus libero. Ut eget felis at magna aliquam dictum."
            buttonText="My Stories"
          />
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    family: file(relativePath: { eq: "images/family.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    husband: file(relativePath: { eq: "images/wifeandkids.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    develop: file(relativePath: { eq: "images/develop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    story: file(relativePath: { eq: "images/story.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default HomePage

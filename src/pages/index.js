import React from "react"
import { graphql } from "gatsby"
import { Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../templates/layout"
import CustomCard from "../components/customCard"
import Img from "gatsby-image"

const useStyles = makeStyles(theme => ({
  customContainer: {
    padding: "24px 0",
    marginBottom: "24px",
  },
  customImage: {
    width: "100%",
    borderRadius: "15px",
  },
  imageDiv: {
    backgroundColor: "#2373ff",
    backgroundImage: "linear-gradient(0deg, #2373ff 0%, #8ab4ff 100%);",
    padding: "3px",
    width: "90%",
    borderRadius: "15px",
    margin: "16px 0",
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
  },
  jumbotron: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "space-around",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row-reverse",
    },
  },
  customHeadline: {
    fontSize: "1.4em",
    [theme.breakpoints.up("md")]: {
      flexBasis: "40%",
      textAlign: "right",
      fontSize: "4.8em",
      margin: "16px 0",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "6.2em",
    },
  },

  cardDiv: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    margin: "32px 0 16px 0",
    [theme.breakpoints.up("lg")]: {
      justifyContent: "space-evenly",
    },
  },
}))

const HomePage = ({ data }) => {
  const classes = useStyles()
  return (
    <Layout>
      <Container className={classes.customContainer}>
        <div className={classes.jumbotron}>
          <div className={classes.imageDiv}>
            <Img
              fluid={data.family.childImageSharp.fluid}
              className={classes.customImage}
              imgStyle={{ borderRadius: "5px" }}
            />
          </div>

          <Typography
            variant="h1"
            align="center"
            className={classes.customHeadline}
          >
            Father/ Husband/ Designer/ Developer
          </Typography>
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
            titleText="Designer/Developer"
            excerptText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quam purus, pulvinar et lorem a, fermentum dapibus libero. Ut eget felis at magna aliquam dictum."
            buttonText="My Projects"
            link="/projects"
            imgStyle={{ objectPosition: "top center" }}
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

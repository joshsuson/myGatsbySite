import React from "react"
import Layout from "../templates/layout"
import { Typography, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import RandomFact from "../components/randomFact"
import Gallery from "../components/gallery"
import Img from "gatsby-image"

const useStyles = makeStyles(theme => ({
  container: {
    margin: "16px auto",
    padding: "0",
    [theme.breakpoints.up("md")]: {
      width: "85%",
    },
  },
  profileImg: {
    height: "350px",
    borderRadius: "15px",
  },
  aboutDiv: {
    margin: "0 16px",
  },
  quote: {
    margin: "48px 32px",
    fontStyle: "italic",
    fontSize: "2rem",
  },
  header: {
    marginBottom: "16px",
    fontSize: "3rem",
  },
  body: {
    lineHeight: "1.75em",
  },
  imgDiv: {
    padding: "3px",
    backgroundColor: "#2373ff",
    backgroundImage: "linear-gradient(0deg, #2373ff 0%, #8ab4ff 100%);",
    margin: "32px auto",
    borderRadius: "15px",
    width: "90%",
    [theme.breakpoints.up("md")]: {
      width: "65%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "30%",
    },
  },
}))

export default ({ data }) => {
  const classes = useStyles()

  return (
    <Layout>
      <Container className={classes.container}>
        <div className={classes.imgDiv}>
          <Img
            fluid={data.profile.childImageSharp.fluid}
            className={classes.profileImg}
          />
        </div>
        <div className={classes.aboutDiv}>
          <Typography variant="h1" className={classes.header}>
            Hi. I'm Josh
          </Typography>
          <Typography variant="body1" className={classes.body}>
            I live in Concord, NC and spend most of my time being a husband and
            a dad. While I do that I try to create interesting digital products
            and tell captivating stories. All for the glory of God and the
            advancement of the Gospel. Here's what you need to know about me: My
            whole life I only ever wanted to be a pastor. It took a while for me
            to get there, but I finally did. Unfortunately, once I reached my
            dream, it was anything but dreamlike. In fact, it was a complete
            disaster. After that experience I looked at my life and asked "What
            am I good at?". The answer was stories and technology. Since then
            I've been trying to hone my skills as a developer and take care of
            my family through technology. All the while trying to tell good
            stories to people that want to hear them.
          </Typography>
          <Typography variant="h4" align="center" className={classes.quote}>
            "I try to create interesting digital products and tell captivating
            stories. All for the glory of God and the advancement of the
            Gospel."
          </Typography>
          <Typography variant="h2" className={classes.header}>
            Part of the Solution
          </Typography>
          <Typography variant="body1" className={classes.body}>
            If you look at the world today it can be pretty overwhelming.
            Especially when you start talking about technology. Whether it's the
            porn problem and all the baggage that comes with it or the fact that
            big tech is trying to play moral police, except without the
            morality, things can feel pretty hopeless. I believe that
            technology, when put in it's proper place can be life giving and
            meaningful. The reason I decided to be developer after failing as a
            pastor is because I wanted to be a part of the solution. I want to
            help people use technology correctly. If we can let go of likes,
            follows, and views then we may actually find some hope in the
            digital stratosphere. My goal is to create products that provide
            value to people's lives and help them see technology can be more
            than a mind suck full of hopelessness. I want to help people tell
            their stories and change their lives.
          </Typography>
        </div>
        <RandomFact />
      </Container>
      <Gallery />
    </Layout>
  )
}

export const query = graphql`
  query {
    profile: file(relativePath: { eq: "images/profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

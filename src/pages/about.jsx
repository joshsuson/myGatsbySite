import React from "react"
import Layout from "../templates/layout"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import RandomFact from "../components/randomFact"
import Gallery from "../components/gallery"
import Img from "gatsby-image"

const useStyles = makeStyles({
  profileImg: {
    width: "400px",
    height: "400px",
    margin: "0 auto",
    border: "10px solid #3e3e3e",
    borderRadius: "15px",
  },
  aboutDiv: {
    width: "65%",
    margin: "56px auto",
  },
  quote: {
    width: "50%",
    margin: "48px auto",
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
})

export default ({ data }) => {
  const classes = useStyles()

  return (
    <Layout>
      <Img
        fluid={data.profile.childImageSharp.fluid}
        className={classes.profileImg}
      />
      <div className={classes.aboutDiv}>
        <Typography variant="h1" className={classes.header}>
          Hi. I'm Josh
        </Typography>
        <Typography variant="body1" className={classes.body}>
          I live in Concord, NC and spend most of my time being a husband and a
          dad. While I do that I try to create interesting digital products and
          tell captivating stories. All for the glory of God and the advancement
          of the Gospel. Here's what you need to know about me: My whole life I
          only ever wanted to be a pastor. It took a while for me to get there,
          but I finally did. Unfortunately, once I reached my dream, it was
          anything but dreamlike. In fact, it was a complete disaster. After
          that experience I looked at my life and asked "What am I good at?".
          The answer was stories and technology. Since then I've been trying to
          hone my skills as a developer and take care of my family through
          technology. All the while trying to tell good stories to people that
          want to hear them.
        </Typography>
        <Typography variant="h4" align="center" className={classes.quote}>
          "I try to create interesting digital products and tell captivating
          stories. All for the glory of God and the advancement of the Gospel."
        </Typography>
        <Typography variant="h2" className={classes.header}>
          Part of the Solution
        </Typography>
        <Typography variant="body1" className={classes.body}>
          If you look at the world today it can be pretty overwhelming.
          Especially when you start talking about technology. Whether it's the
          porn problem and all the baggage that comes with it or the fact that
          big tech is trying to play moral police, except without the morality,
          things can feel pretty hopeless. I believe that technology, when put
          in it's proper place can be life giving and meaningful. The reason I
          decided to be developer after failing as a pastor is because I wanted
          to be a part of the solution. I want to help people use technology
          correctly. If we can let go of likes, follows, and views then we may
          actually find some hope in the digital stratosphere. My goal is to
          create products that provide value to people's lives and help them see
          technology can be more than a mind suck full of hopelessness. I want
          to help people tell their stories and change their lives.
        </Typography>
      </div>
      <RandomFact />
      <Gallery
        first={data.addisonOne.childImageSharp.fluid}
        second={data.evieOne.childImageSharp.fluid}
        third={data.evieTwo.childImageSharp.fluid}
        fourth={data.addisonTwo.childImageSharp.fluid}
        fifth={data.addisonThree.childImageSharp.fluid}
        sixth={data.charlieOne.childImageSharp.fluid}
        seventh={data.evieThree.childImageSharp.fluid}
        eighth={data.threekids.childImageSharp.fluid}
      />
    </Layout>
  )
}

export const query = graphql`
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
`

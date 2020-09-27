import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
import { Container, Typography, Button } from "@material-ui/core"
import Img from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  imgDiv: {
    width: "90%",
    margin: "8px auto",
    padding: "2px",
    backgroundColor: "#2373ff",
    backgroundImage: "linear-gradient(0deg, #2373ff 0%, #8ab4ff 100%);",
    borderRadius: "15px",
  },
  customBtn: {
    display: "block",
    textAlign: "center",
    margin: "8px auto",
    background: "linear-gradient(180deg, #669dff 0%, #2373ff 100%)",
    boxShadow: "0 4px 8px rgba(35, 115, 255, .40)",
    "&:hover": {
      boxShadow: "0 4px 16px rgba(35, 115, 255, .40)",
    },
    [theme.breakpoints.up("md")]: {
      width: "30%",
    },
  },
}))

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  const { imgDiv, customBtn } = useStyles()
  return (
    <Layout>
      <Container style={{ marginTop: "48px", marginBottom: "32px" }}>
        <div className={imgDiv}>
          <Img
            fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
            style={{ borderRadius: "15px" }}
          />
        </div>
        <Typography variant="h1">{post.frontmatter.title}</Typography>
        <Typography>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Typography>
        <Button variant="contained" href="/projects" className={customBtn}>
          Back To Projects
        </Button>
      </Container>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

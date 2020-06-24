import React from "react"
import ProjectLink from "./projectLink"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  customDiv: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "32px 0",
  },
})

const JavascriptProjects = props => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      projectFive: file(
        relativePath: { eq: "images/projectPictures/projectFive.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      projectSix: file(
        relativePath: { eq: "images/projectPictures/projectSix.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      projectSeven: file(
        relativePath: { eq: "images/projectPictures/projectSeven.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      projectEight: file(
        relativePath: { eq: "images/projectPictures/projectEight.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className={classes.customDiv}>
      <ProjectLink
        link={"/"}
        id={"projectFive"}
        image={data.projectFive.childImageSharp.fluid}
        title={"Project Five"}
        onClick={props.onClick}
      />
      <ProjectLink
        link={"/"}
        id={"projectSix"}
        image={data.projectSix.childImageSharp.fluid}
        title={"Project Six"}
        onClick={props.onClick}
      />
      <ProjectLink
        link={"/"}
        id={"projectSeven"}
        image={data.projectSeven.childImageSharp.fluid}
        title={"Project Seven"}
        onClick={props.onClick}
      />
      <ProjectLink
        link={"/"}
        id={"projectEight"}
        image={data.projectEight.childImageSharp.fluid}
        title={"Project Eight"}
        onClick={props.onClick}
      />
    </div>
  )
}

export default JavascriptProjects

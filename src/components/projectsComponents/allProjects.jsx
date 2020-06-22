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

const AllProjects = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      projectOne: file(
        relativePath: { eq: "images/projectPictures/projectOne.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      projectTwo: file(
        relativePath: { eq: "images/projectPictures/projectTwo.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      projectThree: file(
        relativePath: { eq: "images/projectPictures/projectThree.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      projectFour: file(
        relativePath: { eq: "images/projectPictures/projectFour.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
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
        id={"projectOne"}
        image={data.projectOne.childImageSharp.fluid}
        title={"Project One"}
      />
      <ProjectLink
        link={"/"}
        id={"projectTwo"}
        image={data.projectTwo.childImageSharp.fluid}
        title={"Project Two"}
      />
      <ProjectLink
        link={"/"}
        id={"projectThree"}
        image={data.projectThree.childImageSharp.fluid}
        title={"Project Three"}
      />
      <ProjectLink
        link={"/"}
        id={"projectFour"}
        image={data.projectFour.childImageSharp.fluid}
        title={"Project Four"}
      />
      <ProjectLink
        link={"/"}
        id={"projectFive"}
        image={data.projectFive.childImageSharp.fluid}
        title={"Project Five"}
      />
      <ProjectLink
        link={"/"}
        id={"projectSix"}
        image={data.projectSix.childImageSharp.fluid}
        title={"Project Six"}
      />
      <ProjectLink
        link={"/"}
        id={"projectSeven"}
        image={data.projectSeven.childImageSharp.fluid}
        title={"Project Seven"}
      />
      <ProjectLink
        link={"/"}
        id={"projectEight"}
        image={data.projectEight.childImageSharp.fluid}
        title={"Project Eight"}
      />
    </div>
  )
}

export default AllProjects

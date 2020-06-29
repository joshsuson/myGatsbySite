import React from "react"
import ProjectLink from "./projectLink"
import { makeStyles } from "@material-ui/core/styles"
import useProjectImageData from "../../data/projectImageData"

const useStyles = makeStyles({
  customDiv: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "32px 0",
  },
})

const HtmlProjects = props => {
  const classes = useStyles()
  const {
    projectOne,
    projectThree,
    projectFive,
    projectSeven,
  } = useProjectImageData()

  return (
    <div className={classes.customDiv}>
      <ProjectLink
        link={"/"}
        id={"projectOne"}
        image={projectOne.childImageSharp.fluid}
        title={"Project One"}
        onClick={props.onClick}
      />
      <ProjectLink
        link={"/"}
        id={"projectThree"}
        image={projectThree.childImageSharp.fluid}
        title={"Project Three"}
        onClick={props.onClick}
      />
      <ProjectLink
        link={"/"}
        id={"projectFive"}
        image={projectFive.childImageSharp.fluid}
        title={"Project Five"}
        onClick={props.onClick}
      />
      <ProjectLink
        link={"/"}
        id={"projectSeven"}
        image={projectSeven.childImageSharp.fluid}
        title={"Project Seven"}
        onClick={props.onClick}
      />
    </div>
  )
}

export default HtmlProjects

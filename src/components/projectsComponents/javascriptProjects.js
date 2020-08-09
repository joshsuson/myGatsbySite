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

const JavascriptProjects = props => {
  const classes = useStyles()
  const {
    projectFive,
    projectSix,
    projectSeven,
    projectEight,
  } = useProjectImageData()

  return (
    <div className={classes.customDiv}>
      <ProjectLink
        link={"/"}
        id={"projectFive"}
        image={projectFive.childImageSharp.fluid}
        title={"Project Five"}
        onClick={props.onClick}
        tab={"javascript"}
      />
      <ProjectLink
        link={"/"}
        id={"projectSix"}
        image={projectSix.childImageSharp.fluid}
        title={"Project Six"}
        onClick={props.onClick}
        tab={"javascript"}
      />
      <ProjectLink
        link={"/"}
        id={"projectSeven"}
        image={projectSeven.childImageSharp.fluid}
        title={"Project Seven"}
        onClick={props.onClick}
        tab={"javascript"}
      />
      <ProjectLink
        link={"/"}
        id={"projectEight"}
        image={projectEight.childImageSharp.fluid}
        title={"Project Eight"}
        onClick={props.onClick}
        tab={"javascript"}
      />
    </div>
  )
}

export default JavascriptProjects

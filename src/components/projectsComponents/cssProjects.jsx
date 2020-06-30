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

const CssProjects = props => {
  const classes = useStyles()
  const {
    projectTwo,
    projectThree,
    projectFour,
    projectSeven,
    projectEight,
  } = useProjectImageData()

  return (
    <div className={classes.customDiv}>
      <ProjectLink
        link={"/"}
        id={"projectTwo"}
        image={projectTwo.childImageSharp.fluid}
        title={"Project Two"}
        onClick={props.onClick}
        tab={"css"}
      />
      <ProjectLink
        link={"/"}
        id={"projectThree"}
        image={projectThree.childImageSharp.fluid}
        title={"Project Three"}
        onClick={props.onClick}
        tab={"css"}
      />
      <ProjectLink
        link={"/"}
        id={"projectFour"}
        image={projectFour.childImageSharp.fluid}
        title={"Project Four"}
        onClick={props.onClick}
        tab={"css"}
      />
      <ProjectLink
        link={"/"}
        id={"projectSeven"}
        image={projectSeven.childImageSharp.fluid}
        title={"Project Seven"}
        onClick={props.onClick}
        tab={"css"}
      />
      <ProjectLink
        link={"/"}
        id={"projectEight"}
        image={projectEight.childImageSharp.fluid}
        title={"Project Eight"}
        onClick={props.onClick}
        tab={"css"}
      />
    </div>
  )
}

export default CssProjects

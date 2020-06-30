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

const AllProjects = props => {
  const classes = useStyles()
  const {
    projectOne,
    projectTwo,
    projectThree,
    projectFour,
    projectFive,
    projectSix,
    projectSeven,
    projectEight,
  } = useProjectImageData()

  return (
    <div className={classes.customDiv}>
      <ProjectLink
        link={"/"}
        id={"projectOne"}
        image={projectOne.childImageSharp.fluid}
        title={"Project One"}
        onClick={props.onClick}
        tab={"all"}
      />
      <ProjectLink
        link={"/"}
        id={"projectTwo"}
        image={projectTwo.childImageSharp.fluid}
        title={"Project Two"}
        onClick={props.onClick}
        tab={"all"}
      />
      <ProjectLink
        link={"/"}
        id={"projectThree"}
        image={projectThree.childImageSharp.fluid}
        title={"Project Three"}
        onClick={props.onClick}
        tab={"all"}
      />
      <ProjectLink
        link={"/"}
        id={"projectFour"}
        image={projectFour.childImageSharp.fluid}
        title={"Project Four"}
        onClick={props.onClick}
        tab={"all"}
      />
      <ProjectLink
        link={"/"}
        id={"projectFive"}
        image={projectFive.childImageSharp.fluid}
        title={"Project Five"}
        onClick={props.onClick}
        tab={"all"}
      />
      <ProjectLink
        link={"/"}
        id={"projectSix"}
        image={projectSix.childImageSharp.fluid}
        title={"Project Six"}
        onClick={props.onClick}
        tab={"all"}
      />
      <ProjectLink
        link={"/"}
        id={"projectSeven"}
        image={projectSeven.childImageSharp.fluid}
        title={"Project Seven"}
        onClick={props.onClick}
        tab={"all"}
      />
      <ProjectLink
        link={"/"}
        id={"projectEight"}
        image={projectEight.childImageSharp.fluid}
        title={"Project Eight"}
        onClick={props.onClick}
        tab={"html"}
      />
    </div>
  )
}

export default AllProjects

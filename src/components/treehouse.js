import React from "react"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import ProjectPicker from "./projectsComponents/projectPicker"
import Project from "./projectsComponents/project"
import { treehouseProjects } from "../data/treehouseProjects"
import useProjectImageData from "../data/projectImageData"

const useStyles = makeStyles({
  titleDiv: {
    textAlign: "center",
    margin: "24px 0",
  },
})

const Treehouse = () => {
  const [project, setProject] = React.useState(null)
  const [value, setValue] = React.useState(0)

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

  const handleClick = e => {
    if (e.target.nodeName === "IMG") {
      const languageTab =
        e.target.parentElement.parentElement.parentElement.dataset.tab
      setProject(e.target.title)
      {
        languageTab === "all" && setValue(0)
      }
      {
        languageTab === "html" && setValue(1)
      }
      {
        languageTab === "css" && setValue(2)
      }
      {
        languageTab === "javascript" && setValue(3)
      }
    }
  }

  const buttonClick = () => {
    setProject(null)
  }

  return (
    <>
      <div className={classes.titleDiv}>
        <Typography variant="h2">Practice Projects</Typography>
        <Typography variant="subtitle1">
          Check out mockup projects I've built to practice my skills!
        </Typography>
      </div>
      {project === null && (
        <ProjectPicker tabValue={value} onClick={handleClick} />
      )}
      {project === "projectOne" && (
        <Project
          data={treehouseProjects.projectOne}
          image={projectOne.childImageSharp.fluid}
          onClick={buttonClick}
        />
      )}
      {project === "projectTwo" && (
        <Project
          data={treehouseProjects.projectTwo}
          onClick={buttonClick}
          image={projectTwo.childImageSharp.fluid}
        />
      )}
      {project === "projectThree" && (
        <Project
          data={treehouseProjects.projectThree}
          onClick={buttonClick}
          image={projectThree.childImageSharp.fluid}
        />
      )}
      {project === "projectFour" && (
        <Project
          data={treehouseProjects.projectFour}
          onClick={buttonClick}
          image={projectFour.childImageSharp.fluid}
        />
      )}
      {project === "projectFive" && (
        <Project
          data={treehouseProjects.projectFive}
          onClick={buttonClick}
          image={projectFive.childImageSharp.fluid}
        />
      )}
      {project === "projectSix" && (
        <Project
          data={treehouseProjects.projectSix}
          onClick={buttonClick}
          image={projectSix.childImageSharp.fluid}
        />
      )}
      {project === "projectSeven" && (
        <Project
          data={treehouseProjects.projectSeven}
          onClick={buttonClick}
          image={projectSeven.childImageSharp.fluid}
        />
      )}
      {project === "projectEight" && (
        <Project
          data={treehouseProjects.projectEight}
          onClick={buttonClick}
          image={projectEight.childImageSharp.fluid}
        />
      )}
    </>
  )
}

export default Treehouse

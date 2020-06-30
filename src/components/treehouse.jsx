import React from "react"
import { Typography } from "@material-ui/core"
import ProjectPicker from "./projectsComponents/projectPicker"
import Project from "./projectsComponents/project"
import { treehouseProjects } from "../data/treehouseProjects"

const Treehouse = () => {
  const [project, setProject] = React.useState(null)
  const [value, setValue] = React.useState(0)

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
      <div>
        <Typography variant="h2">Techdegree Projects</Typography>
        <Typography variant="subtitle1">
          Check out my projects from Team Treehouse's Front End Web Devolopment
          Techdegree
        </Typography>
      </div>
      {project === null && (
        <ProjectPicker tabValue={value} onClick={handleClick} />
      )}
      {project === "projectOne" && (
        <Project data={treehouseProjects.projectOne} onClick={buttonClick} />
      )}
      {project === "projectTwo" && (
        <Project data={treehouseProjects.projectTwo} onClick={buttonClick} />
      )}
      {project === "projectThree" && (
        <Project data={treehouseProjects.projectThree} onClick={buttonClick} />
      )}
      {project === "projectFour" && (
        <Project data={treehouseProjects.projectFour} onClick={buttonClick} />
      )}
      {project === "projectFive" && (
        <Project data={treehouseProjects.projectFive} onClick={buttonClick} />
      )}
      {project === "projectSix" && (
        <Project data={treehouseProjects.projectSix} onClick={buttonClick} />
      )}
      {project === "projectSeven" && (
        <Project data={treehouseProjects.projectSeven} onClick={buttonClick} />
      )}
      {project === "projectEight" && (
        <Project data={treehouseProjects.projectEight} onClick={buttonClick} />
      )}
    </>
  )
}

export default Treehouse

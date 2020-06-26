import React from "react"
import { AppBar, Typography, Tabs, Tab } from "@material-ui/core"
import AllProjects from "./allProjects"
import HtmlProjects from "./htmlProjects"
import CssProjects from "./cssProjects"
import { makeStyles } from "@material-ui/core/styles"
import JavascriptProjects from "./javascriptProjects"

const ProjectPicker = props => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="All" />
          <Tab label="HTML" />
          <Tab label="CSS" />
          <Tab label="Javascript" />
        </Tabs>
      </AppBar>
      <div>
        {value === 0 && <AllProjects />}
        {value === 1 && <HtmlProjects />}
        {value === 2 && <CssProjects />}
        {value === 3 && <JavascriptProjects onClick={props.onClick} />}
      </div>
    </>
  )
}

export default ProjectPicker

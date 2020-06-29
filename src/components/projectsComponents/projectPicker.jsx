import React from "react"
import { AppBar, Tabs, Tab } from "@material-ui/core"
import AllProjects from "./allProjects"
import HtmlProjects from "./htmlProjects"
import CssProjects from "./cssProjects"
import { makeStyles } from "@material-ui/core/styles"
import JavascriptProjects from "./javascriptProjects"

const ProjectPicker = props => {
  const [value, setValue] = React.useState(props.tabValue)

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
        {value === 0 && <AllProjects onClick={props.onClick} />}
        {value === 1 && <HtmlProjects onClick={props.onClick} />}
        {value === 2 && <CssProjects onClick={props.onClick} />}
        {value === 3 && <JavascriptProjects onClick={props.onClick} />}
      </div>
    </>
  )
}

export default ProjectPicker

import React from "react"
import { AppBar, Typography, Tabs, Tab } from "@material-ui/core"
import AllProjects from "./projectsComponents/allProjects"
import HtmlProjects from "./projectsComponents/htmlProjects"
import CssProjects from "./projectsComponents/cssProjects"
import { makeStyles } from "@material-ui/core/styles"
import JavascriptProjects from "./projectsComponents/javascriptProjects"

const useStyles = makeStyles({
  customDiv: {
    height: "600px",
  },
})

const Treehouse = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
    console.log(value)
  }

  const handleClick = e => {
    if (e.target.nodeName === "IMG") {
      console.log("clicked")
    }
    console.log(e.target.nodeName)
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
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="All" />
          <Tab label="HTML" />
          <Tab label="CSS" />
          <Tab label="Javascript" />
        </Tabs>
      </AppBar>
      <div className={classes.customDiv}>
        {value === 0 && <AllProjects />}
        {value === 1 && <HtmlProjects />}
        {value === 2 && <CssProjects />}
        {value === 3 && <JavascriptProjects onClick={handleClick} />}
      </div>
    </>
  )
}

export default Treehouse

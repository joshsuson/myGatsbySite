import React from "react"
import { AppBar, Typography, Tabs, Tab } from "@material-ui/core"

const Treehouse = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
    console.log(value)
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
    </>
  )
}

export default Treehouse

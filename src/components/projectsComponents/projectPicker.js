import React from "react"
import { AppBar, Tabs, Tab } from "@material-ui/core"
import AllProjects from "./allProjects"
import HtmlProjects from "./htmlProjects"
import CssProjects from "./cssProjects"
import { makeStyles } from "@material-ui/core/styles"
import JavascriptProjects from "./javascriptProjects"

const useStyles = makeStyles({
  customAppBar: {
    borderRadius: "10px",
    backgroundColor: "hsl(219, 15%, 30%)",
  },
  customTab: {
    backgroundColor: "#FFE32C",
    background:
      "linear-gradient(180deg, #fff7c7 12%, #FFE32C 50%, #c7ba00 100%)",
    boxShadow: "0 2px 8px hsla(52, 100%, 59%, .30)",
    margin: "8px 0",
    borderRadius: "50px",
    "& span": {
      color: "hsl(219, 15%, 30%)",
    },
  },
  indicator: {
    display: "none",
  },
})

const ProjectPicker = props => {
  const { customAppBar, customTab, indicator } = useStyles()

  const [value, setValue] = React.useState(props.tabValue)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <AppBar position="static" className={customAppBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          classes={{ indicator: indicator }}
          centered
        >
          <Tab label="All" classes={{ selected: customTab }} />
          <Tab label="HTML" classes={{ selected: customTab }} />
          <Tab label="CSS" classes={{ selected: customTab }} />
          <Tab label="Javascript" classes={{ selected: customTab }} />
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

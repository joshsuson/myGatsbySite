import React from "react"
import Nav from "../components/nav"
import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Typography, Toolbar } from "@material-ui/core"
import SVGLogo from "../assets/jsuson-logo-green.svg"

const useStyles = makeStyles(theme => ({
  logoDiv: {
    marginRight: "auto",
    display: "flex",
    alignItems: "center",
    padding: "8px 0",
  },
  logo: {
    width: "4em",
  },
  logoText: {
    fontSize: "1.5em",
    marginLeft: "8px",
    textTransform: "uppercase",
  },
  customAppBar: {
    backgroundColor: "#262b33",
    borderBottom: "1px solid rgba(250, 250, 250, 0.2)",
  },
}))

export default function HeaderBar() {
  const classes = useStyles()

  return (
    <>
      <AppBar position="fixed" className={classes.customAppBar}>
        <Toolbar>
          <div className={classes.logoDiv}>
            <SVGLogo className={classes.logo} />
            <Typography className={classes.logoText}>Josh Suson</Typography>
          </div>
          <Nav />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}

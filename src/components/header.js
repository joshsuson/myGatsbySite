import React from "react"
import Nav from "../components/nav"
import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Typography, Toolbar } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  title: {
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "35%",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "40%",
    },
  },
}))

export default function HeaderBar() {
  const classes = useStyles()

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Nav />
          <Typography className={classes.title}>Josh Suson</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}

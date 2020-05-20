import React from "react"
import Nav from "../components/nav"
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Typography, Toolbar } from "@material-ui/core"

const useStyles = makeStyles({
  title: {
    alignSelf: center,
  }
})

export default () => (
  const classes = useStyles()
  <>
    <AppBar position="fixed">
      <Toolbar>
        <Nav />
        <Typography className={}>Josh Suson</Typography>
      </Toolbar>
    </AppBar>
    <Toolbar />
  </>
)

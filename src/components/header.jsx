import React from "react"
import Nav from "../components/nav"
import { AppBar, Typography, Toolbar } from "@material-ui/core"

export default () => (
  <>
    <AppBar position="fixed">
      <Toolbar>
        <Nav />
        <Typography>Josh Suson</Typography>
      </Toolbar>
    </AppBar>
    <Toolbar />
  </>
)

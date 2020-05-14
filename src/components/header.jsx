import React from "react"
import Nav from "../components/nav"
import { AppBar, Typography } from "@material-ui/core"

export default () => (
  <AppBar position="fixed">
    <Typography>Josh Suson</Typography>
    <Nav></Nav>
  </AppBar>
)

import React from "react"
import { Typography, Button } from "@material-ui/core"

const Project = props => {
  return (
    <div>
      <Typography variant="h3">{props.data.title}</Typography>
      <Button variant="contained" color="primary" onClick={props.onClick}>
        Back to Projects
      </Button>
    </div>
  )
}

export default Project

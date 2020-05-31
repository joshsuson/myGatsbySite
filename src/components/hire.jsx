import React from "react"
import { Typography, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  hireDiv: {
    padding: "16px",
    borderTop: "1px solid #eee",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
})

const Hire = () => {
  const classes = useStyles()
  return (
    <div className={classes.hireDiv}>
      <div>
        <Typography variant="h4">
          Do you need help with your website?
        </Typography>
        <Typography variant="h6">
          Click the button and let's work together
        </Typography>
      </div>
      <Button
        variant="contained"
        color="primary"
        href="https://www.upwork.com/freelancers/~01a761b1fd61c8a682"
        target="_blank"
      >
        Hire Me on Upwork
      </Button>
    </div>
  )
}

export default Hire

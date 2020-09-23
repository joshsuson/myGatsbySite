import React from "react"
import { Typography, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  hireDiv: {
    padding: "8px",
    borderTop: "1px solid rgba(243, 246, 248, .30)",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    marginBottom: "8px",
  },
  button: {
    marginBottom: "16px",
    backgroundColor: "#7bde4e",
    backgroundImage: "linear-gradient(180deg, #7bde4e 0%, #5cb82e 100%)",
    boxShadow: "0 4px 8px rgba(123, 222, 78, .40)",
    "&:hover": {
      boxShadow: "0 4px 16px rgba(123, 222, 78, .40)",
    },
  },
})

const Hire = () => {
  const classes = useStyles()
  return (
    <div className={classes.hireDiv}>
      <div>
        <Typography variant="h4" className={classes.text}>
          Do you need help with your website?
        </Typography>
        <Typography variant="h6" className={classes.text}>
          Click the button and let's work together
        </Typography>
      </div>
      <Button
        variant="contained"
        color="primary"
        href="https://www.upwork.com/freelancers/~01a761b1fd61c8a682"
        target="_blank"
        className={classes.button}
      >
        Hire Me on Upwork
      </Button>
    </div>
  )
}

export default Hire

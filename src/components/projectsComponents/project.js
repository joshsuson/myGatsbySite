import React from "react"
import { Typography, Button, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Img from "gatsby-image"
import "../../utils/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles({
  customPaper: {
    width: "80%",
    padding: "24px",
    margin: "24px auto",
    backgroundColor: "hsl(217, 14%, 17%)",
  },
  customImg: {
    width: "50%",
    margin: "0 auto",
    marginBottom: "16px",
    borderRadius: "15px",
  },
  backButton: {
    margin: "0 auto",
    display: "block",
  },
  buttonDiv: {
    textAlign: "center",
    width: "60%",
    margin: "16px auto",
    marginTop: "32px",
  },
  projectButton: {
    marginRight: "8px",
  },
  githubButton: {
    marginLeft: "8px",
  },
  textDiv: {
    margin: "0 auto",
    marginTop: "48px",
    width: "60%",
  },
  title: {
    textAlign: "center",
    marginBottom: "8px",
  },
  subtitle: {
    margin: "8px 0",
  },
})

const Project = props => {
  const classes = useStyles()

  return (
    <div>
      <Paper elevation={3} className={classes.customPaper}>
        <Img fluid={props.image} className={classes.customImg} />
        <div className={classes.textDiv}>
          <Typography variant="h3" className={classes.title}>
            {props.data.title}
          </Typography>
          <Typography variant="h5" className={classes.subtitle}>
            Goal:
          </Typography>
          <Typography variant="body1">{props.data.goal}</Typography>
          <Typography variant="h5" className={classes.subtitle}>
            Solution:
          </Typography>
          <Typography variant="body1">{props.data.solution}</Typography>
        </div>
        <div className={classes.buttonDiv}>
          <Button
            variant="contained"
            color="primary"
            href={props.data.link}
            target="_blank"
            className={classes.projectButton}
          >
            See The Project
          </Button>
          <Button
            variant="contained"
            color="secondary"
            href={props.data.github}
            target="_blank"
            className={classes.githubButton}
          >
            <FontAwesomeIcon icon={["fab", "github"]} /> See The Code
          </Button>
        </div>
      </Paper>
      <Button
        variant="contained"
        color="primary"
        onClick={props.onClick}
        className={classes.backButton}
      >
        Back to Projects
      </Button>
    </div>
  )
}

export default Project

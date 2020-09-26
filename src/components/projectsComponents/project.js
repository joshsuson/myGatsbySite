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
    width: "100%",
    borderRadius: "15px",
  },
  imgDiv: {
    width: "50%",
    margin: "0 auto",
    marginBottom: "16px",
    borderRadius: "15px",
    padding: "3px",
    backgroundColor: "#2373ff",
    backgroundImage: "linear-gradient(0deg, #2373ff 0%, #8ab4ff 100%);",
  },
  backButton: {
    margin: "0 auto",
    display: "block",
    background: "linear-gradient(180deg, #669dff 0%, #2373ff 100%)",
    boxShadow: "0 4px 8px rgba(35, 115, 255, .40)",
    "&:hover": {
      boxShadow: "0 4px 16px rgba(35, 115, 255, .40)",
    },
    marginBottom: "24px",
  },
  buttonDiv: {
    textAlign: "center",
    width: "60%",
    margin: "16px auto",
    marginTop: "32px",
  },
  projectButton: {
    marginRight: "8px",
    background: "linear-gradient(180deg, #669dff 0%, #2373ff 100%)",
    boxShadow: "0 4px 8px rgba(35, 115, 255, .40)",
    "&:hover": {
      boxShadow: "0 4px 16px rgba(35, 115, 255, .40)",
    },
  },
  githubButton: {
    marginLeft: "8px",
    background:
      "linear-gradient(180deg, #fff7c7 12%, #FFE32C 50%, #c7ba00 100%)",
    boxShadow: "0 4px 8px hsla(52, 100%, 59%, .40)",
    "&:hover": {
      boxShadow: "0 4px 16px hsla(52, 100%, 59%, .40)",
    },
    "& span": {
      color: "#424a59",
    },
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
  customIcon: {
    marginRight: "8px",
    width: "25px !important",
    height: "25px",
    "& path": {
      fill: "#424a59",
    },
  },
})

const Project = props => {
  const classes = useStyles()

  return (
    <div>
      <Paper elevation={3} className={classes.customPaper}>
        <div className={classes.imgDiv}>
          <Img fluid={props.image} className={classes.customImg} />
        </div>
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
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className={classes.customIcon}
            />{" "}
            See The Code
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

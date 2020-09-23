import React from "react"
import { Typography, Paper, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Img from "gatsby-image"

const useStyles = makeStyles(theme => ({
  customPaper: {
    padding: "16px",
    width: "85%",
    marginBottom: "16px",
    backgroundColor: "#424a59",
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.up("md")]: {
      flexBasis: "40%",
    },
    [theme.breakpoints.up("lg")]: {
      flexBasis: "30%",
    },
  },
  imgDiv: {
    margin: "8px auto",
    width: "80%",
    padding: "2px",
    backgroundColor: "#2373ff",
    backgroundImage: "linear-gradient(0deg, #2373ff 0%, #8ab4ff 100%);",
    borderRadius: "15px",
  },
  cardImage: {
    width: "100%",
    height: "200px",
    borderRadius: "15px",
  },
  customButton: {
    margin: "16px auto",
    display: "block",
    width: "90%",
    textAlign: "center",
    background: "linear-gradient(180deg, #669dff 0%, #2373ff 100%)",
    boxShadow: "0 4px 8px rgba(35, 115, 255, .40)",
    "&:hover": {
      boxShadow: "0 4px 16px rgba(35, 115, 255, .40)",
    },
  },
  header: {
    margin: "16px 0 8px 0",
  },
}))

const CustomCard = props => {
  const classes = useStyles()

  return (
    <Paper elevation={3} className={classes.customPaper}>
      <div className={classes.imgDiv}>
        <Img
          fluid={props.image}
          className={classes.cardImage}
          imgStyle={props.imgStyle}
        />
      </div>
      <Typography variant="h4" className={classes.header}>
        {props.titleText}
      </Typography>
      <Typography variant="body1">{props.excerptText}</Typography>
      <Button
        variant="contained"
        color="primary"
        className={classes.customButton}
        href={props.link}
      >
        {props.buttonText}
      </Button>
    </Paper>
  )
}

export default CustomCard

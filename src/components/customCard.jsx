import React from "react"
import { Typography, Paper, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Img from "gatsby-image"

const useStyles = makeStyles({
  customPaper: {
    padding: "16px",
    flexBasis: "25%",
  },
  cardImage: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    margin: "0 auto",
    border: "10px solid #3e3e3e",
  },
  customButton: {
    margin: "8px auto",
    display: "block",
    width: "50%",
    textAlign: "center",
  },
})

const CustomCard = props => {
  const classes = useStyles()

  return (
    <Paper elevation={3} className={classes.customPaper}>
      <Img fluid={props.image} className={classes.cardImage} />
      <Typography variant="h4">{props.titleText}</Typography>
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

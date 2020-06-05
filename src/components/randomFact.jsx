import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Paper, Button, Typography } from "@material-ui/core"
import { facts } from "../data/facts"

const useStyles = makeStyles(theme => ({
  cardDiv: {
    textAlign: "center",
    margin: "48px auto",

    [theme.breakpoints.up("md")]: {
      width: "65%",
    },
  },
  customPaper: {
    marginBottom: "24px",
    padding: "24px",
    height: "150px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}))

const RandomFact = () => {
  const classes = useStyles()
  const [fact, setFact] = React.useState(
    "Press the button and get a random fact about me!"
  )

  const handleClick = () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)]

    setFact(randomFact)
  }

  return (
    <div className={classes.cardDiv}>
      <Paper elevation={3} className={classes.customPaper}>
        <Typography variant="h4">{fact}</Typography>
      </Paper>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Get Random Fact
      </Button>
    </div>
  )
}

export default RandomFact

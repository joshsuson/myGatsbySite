import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Paper, Button, Typography } from "@material-ui/core"
import { facts } from "../data/facts"

const useStyles = makeStyles(theme => ({
  cardDiv: {
    textAlign: "center",
    margin: "48px auto",
    width: "95%",
    [theme.breakpoints.up("md")]: {
      width: "65%",
    },
  },
  customPaper: {
    marginBottom: "24px",
    padding: "24px",
    height: "175px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFE32C",
    backgroundImage:
      "linear-gradient(180deg, #fff7c7 12%, #FFE32C 50%, #c7ba00 100%)",
  },
  text: {
    color: "hsl(219, 15%, 30%)",
  },
  button: {
    background: "linear-gradient(180deg, #669dff 0%, #2373ff 100%)",
    boxShadow: "0 4px 8px rgba(35, 115, 255, .40)",
    "&:hover": {
      boxShadow: "0 4px 16px rgba(35, 115, 255, .40)",
    },
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
        <Typography variant="h4" className={classes.text}>
          {fact}
        </Typography>
      </Paper>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        className={classes.button}
      >
        Get Random Fact
      </Button>
    </div>
  )
}

export default RandomFact

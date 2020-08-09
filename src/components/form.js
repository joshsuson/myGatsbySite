import React from "react"
import { TextField, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import clsx from "clsx"

const useStyles = makeStyles(theme => ({
  customForm: {
    textAlign: "center",
    margin: "0 auto",
    padding: "16px",
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
  },
  nameField: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "45%",
    },
  },
  customInput: {
    marginBottom: "16px",
  },
  lastNameInput: {
    [theme.breakpoints.up("md")]: {
      marginLeft: "8px",
    },
  },
  customFullWidth: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "92%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "91%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "90%",
    },
  },
  customButton: {
    display: "flex",
    margin: "0 auto",
    [theme.breakpoints.up("md")]: {
      width: "92%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "91%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "90%",
    },
  },
}))

export default function FooterForm() {
  const classes = useStyles()
  const firstName = clsx(classes.customInput, classes.nameField)
  const lastName = clsx(
    classes.customInput,
    classes.nameField,
    classes.lastNameInput
  )
  const email = clsx(classes.customInput, classes.customFullWidth)
  const message = clsx(classes.customInput, classes.customFullWidth)
  return (
    <form className={classes.customForm}>
      <TextField
        id="firstname"
        variant="outlined"
        label="First Name"
        className={firstName}
      />
      <TextField
        id="lastname"
        variant="outlined"
        label="Last Name"
        className={lastName}
      />
      <TextField
        id="email"
        variant="outlined"
        label="E-Mail"
        className={email}
      />
      <TextField
        id="message"
        variant="outlined"
        label="Your Message"
        multiline
        rows={4}
        className={message}
      />
      <Button
        component="submit"
        variant="contained"
        color="primary"
        className={classes.customButton}
      >
        Submit
      </Button>
    </form>
  )
}

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
    "& fieldset": {
      borderColor: "hsl(218, 14%, 50%)",
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "hsl(218, 14%, 80%)",
    },
    "& .MuiOutlinedInput-root": {
      color: "hsl(218, 14%, 50%)",
    },
    "& label": {
      color: "hsl(218, 14%, 50%)",
    },
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
    background: "linear-gradient(180deg, #669dff 0%, #2373ff 100%)",
    boxShadow: "0 4px 8px rgba(35, 115, 255, .40)",
    "&:hover": {
      boxShadow: "0 4px 16px rgba(35, 115, 255, .40)",
    },
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

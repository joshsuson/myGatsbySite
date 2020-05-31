import React from "react"
import Form from "../components/form"
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import "../utils/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles({
  customIcon: {
    fontSize: "2.5em",
    padding: "4px",
  },
  socialDiv: {
    margin: "0 auto",
    textAlign: "center",
  },
  footer: {
    padding: "16px",
    borderTop: "1px solid #eee",
  },
})

export default () => {
  const classes = useStyles()

  return (
    <div className={classes.footer}>
      <Typography variant="h4" align="center">
        Would you like to contact me?
      </Typography>
      <Typography variant="h6" align="center">
        Fill out the information below
      </Typography>
      <Form />
      <div className={classes.socialDiv}>
        <a href="https://twitter.com/joshsuson" target="_blank">
          <FontAwesomeIcon
            icon={["fab", "twitter-square"]}
            className={classes.customIcon}
          />
        </a>
        <a href="https://github.com/joshsuson" target="_blank">
          <FontAwesomeIcon
            icon={["fab", "github-square"]}
            className={classes.customIcon}
          />
        </a>
        <a href="https://www.linkedin.com/in/joshsuson/" target="_blank">
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            className={classes.customIcon}
          />
        </a>
      </div>
    </div>
  )
}

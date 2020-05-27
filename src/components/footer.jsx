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
})

export default () => {
  const classes = useStyles()

  return (
    <div>
      <Typography variant="h4" align="center">
        Would you like to contact me?
      </Typography>
      <Typography variant="h6" align="center">
        Fill out the information below
      </Typography>
      <Form />
      <div className={classes.socialDiv}>
        <a href="">
          <FontAwesomeIcon
            icon={["fab", "twitter-square"]}
            className={classes.customIcon}
          />
        </a>
        <a href="">
          <FontAwesomeIcon
            icon={["fab", "github-square"]}
            className={classes.customIcon}
          />
        </a>
        <a href="">
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            className={classes.customIcon}
          />
        </a>
        <a href="">
          <FontAwesomeIcon
            icon={["fab", "facebook-square"]}
            className={classes.customIcon}
          />
        </a>
      </div>
    </div>
  )
}

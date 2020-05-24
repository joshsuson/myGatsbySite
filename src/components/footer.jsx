import React from "react"
import Form from "../components/form"
import { makeStyles } from "@material-ui/core/styles"
import "../utils/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles({
  customIcon: {
    fontSize: "2.5em",
    padding: "4px",
  },
})

export default () => {
  const classes = useStyles()

  return (
    <div>
      <Form />
      <div>
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

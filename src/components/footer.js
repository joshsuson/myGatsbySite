import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import "../utils/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles({
  customIcon: {
    fontSize: "2.5em",
    padding: "4px",
    "& path": {
      fill: "hsla(218, 100%, 65%, .80)",
    },
    "&:hover": {
      "& path": {
        fill: "hsla(218, 100%, 75%, .80)",
      },
    },
  },
  socialDiv: {
    margin: "0 auto",
    textAlign: "center",
  },
  footer: {
    padding: "16px",
    borderTop: "1px solid rgba(243, 246, 248, .30)",
  },
  footerNav: {
    textAlign: "center",
    marginBottom: "8px",
  },
  link: {
    textDecoration: "none",
    fontFamily: "Roboto, sans-serif",
    padding: "0 8px",
    color: "hsl(218, 14%, 60%)",
    "&:hover": {
      color: "hsl(218, 14%, 80%)",
    },
  },
})

export default () => {
  const classes = useStyles()

  return (
    <div className={classes.footer}>
      <div className={classes.footerNav}>
        <Link to="/" className={classes.link}>
          Home
        </Link>
        <Link to="/about" className={classes.link}>
          About
        </Link>
        <Link to="/projects" className={classes.link}>
          Projects
        </Link>
        <Link to="/contact" className={classes.link}>
          Contact
        </Link>
      </div>
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

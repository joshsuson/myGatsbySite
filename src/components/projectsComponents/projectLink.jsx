import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles({
  customImg: {
    width: "200px",
    height: "200px",
    borderRadius: "10px",
    margin: "0 auto",
  },
  customLink: {
    flexBasis: "25%",
    textAlign: "center",
    margin: "16px 0",
  },
})

const ProjectLink = props => {
  const classes = useStyles()

  return (
    // <Link to={props.link} id={props.id} className={classes.customLink}>
    //   <Img fluid={props.image} className={classes.customImg} />
    //   <Typography>{props.title}</Typography>
    // </Link>
    <div id={props.id} className={classes.customLink} onClick={props.onClick}>
      <Img fluid={props.image} className={classes.customImg} />
      <Typography>{props.title}</Typography>
    </div>
  )
}

export default ProjectLink

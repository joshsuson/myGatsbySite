import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  gallery: {
    display: "flex",
    flexWrap: "wrap",
    margin: "48px 0",
  },
  customImg: {
    flexBasis: "25%",
  },
})

const Gallery = props => {
  const classes = useStyles()

  return (
    <div className={classes.gallery}>
      <Img fluid={props.first} className={classes.customImg} />
      <Img fluid={props.second} className={classes.customImg} />
      <Img fluid={props.third} className={classes.customImg} />
      <Img fluid={props.fourth} className={classes.customImg} />
      <Img fluid={props.fifth} className={classes.customImg} />
      <Img fluid={props.sixth} className={classes.customImg} />
      <Img fluid={props.seventh} className={classes.customImg} />
      <Img fluid={props.eighth} className={classes.customImg} />
    </div>
  )
}

export default Gallery

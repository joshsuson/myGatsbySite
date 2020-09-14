import React from "react"
import CustomCard from "./customCard"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  customDiv: {
    display: "flex",
  },
})

const RecentWork = props => {
  const classes = useStyles()
  return (
    <div className={classes.customDiv}>
      {props.data.allMarkdownRemark.edges.map(({ node }) => (
        <CustomCard
          key={node.id}
          image={node.frontmatter.thumbnail.childImageSharp.fluid}
          titleText={node.frontmatter.title}
          buttonText="Read More"
          excerptText={node.frontmatter.description}
        />
      ))}
    </div>
  )
}

export default RecentWork

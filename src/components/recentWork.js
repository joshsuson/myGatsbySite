import React from "react"
import { Typography } from "@material-ui/core"
import CustomCard from "./customCard"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  customDiv: {
    display: "flex",
    justifyContent: "space-around",
  },
  container: {
    padding: "16px",
    margin: "40px 0",
  },
  title: {
    marginBottom: "24px",
  },
})

const RecentWork = props => {
  const { container, customDiv, title } = useStyles()
  return (
    <div className={container}>
      <Typography variant="h2" align="center" className={title}>
        Check Out My Latest Work
      </Typography>
      <div className={customDiv}>
        {props.data.allMarkdownRemark.edges.map(({ node }) => (
          <CustomCard
            image={node.frontmatter.thumbnail.childImageSharp.fluid}
            titleText={node.frontmatter.title}
            excerptText={node.frontmatter.description}
            buttonText="Read More"
          />
        ))}
      </div>
    </div>
  )
}

export default RecentWork

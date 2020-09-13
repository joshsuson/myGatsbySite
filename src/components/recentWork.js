import React from "react"
import Img from "gatsby-image"

const RecentWork = props => {
  return (
    <>
      <div>
        {props.data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Img fluid={node.frontmatter.thumbnail.childImageSharp.fluid} />
            <h1>{node.frontmatter.title}</h1>
            <h3>{node.frontmatter.description}</h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default RecentWork

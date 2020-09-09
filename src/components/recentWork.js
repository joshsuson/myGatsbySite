import React from "react"

const RecentWork = props => {
  return (
    <>
      {props.data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h1>{node.frontmatter.title}</h1>
          <h3>{node.frontmatter.description}</h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </>
  )
}

export default RecentWork

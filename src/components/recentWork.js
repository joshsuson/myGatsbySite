import React from "react"
// import Img from "gatsby-image"
import CustomCard from "./customCard"

const RecentWork = props => {
  return (
    <>
      <div>
        {props.data.allMarkdownRemark.edges.map(({ node }) => (
          //   <Card key={node.id}>
          //     <Img fluid={node.frontmatter.thumbnail.childImageSharp.fluid} />
          //     <h1>{node.frontmatter.title}</h1>
          //     <h3>{node.frontmatter.description}</h3>
          //     <p>{node.excerpt}</p>
          //   </Card>
          <CustomCard
            key={node.id}
            image={node.frontmatter.thumbnail.childImageSharp.fluid}
            titleText={node.frontmatter.title}
            buttonText="Read More"
            excerptText={node.frontmatter.description}
          />
        ))}
      </div>
    </>
  )
}

export default RecentWork

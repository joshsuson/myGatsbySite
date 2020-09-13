import React from "react"
import Layout from "../templates/layout"
import Treehouse from "../components/treehouse"
import RecentWork from "../components/recentWork"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <RecentWork data={data} />
      <Treehouse />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

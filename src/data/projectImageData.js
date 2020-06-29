import { useStaticQuery, graphql } from "gatsby"

const useProjectImageData = () => {
  const projectImageData = useStaticQuery(graphql`
    query {
      projectOne: file(
        relativePath: { eq: "images/projectPictures/projectOne.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      projectTwo: file(
        relativePath: { eq: "images/projectPictures/projectTwo.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      projectThree: file(
        relativePath: { eq: "images/projectPictures/projectThree.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      projectFour: file(
        relativePath: { eq: "images/projectPictures/projectFour.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      projectFive: file(
        relativePath: { eq: "images/projectPictures/projectFive.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      projectSix: file(
        relativePath: { eq: "images/projectPictures/projectSix.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      projectSeven: file(
        relativePath: { eq: "images/projectPictures/projectSeven.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      projectEight: file(
        relativePath: { eq: "images/projectPictures/projectEight.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return projectImageData
}

export default useProjectImageData

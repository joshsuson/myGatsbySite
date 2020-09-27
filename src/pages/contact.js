import React from "react"
import Layout from "../templates/layout"
import Form from "../components/form"
import { Typography, Container } from "@material-ui/core"

const Contact = () => {
  return (
    <Layout>
      <Container style={{ marginTop: "48px", marginBottom: "32px" }}>
        <Typography variant="h4" align="center">
          Would you like to contact me?
        </Typography>
        <Typography variant="h6" align="center">
          Fill out the information below
        </Typography>
        <Form />
      </Container>
    </Layout>
  )
}

export default Contact

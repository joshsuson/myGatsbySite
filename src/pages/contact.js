import React from "react"
import Layout from "../templates/layout"
import Form from "../components/form"
import { Typography } from "@material-ui/core"

const Contact = () => {
  return (
    <Layout>
      <Typography variant="h4" align="center">
        Would you like to contact me?
      </Typography>
      <Typography variant="h6" align="center">
        Fill out the information below
      </Typography>
      <Form />
    </Layout>
  )
}

export default Contact

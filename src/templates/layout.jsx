import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Hire from "../components/hire"

export default ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Hire />
      <Footer />
    </div>
  )
}

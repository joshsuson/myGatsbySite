import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Hire from "../components/hire"
import "./layout.css"

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

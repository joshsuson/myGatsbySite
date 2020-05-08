import React from "react"
import Form from "../components/form"
import "../utils/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default () => (
  <div>
    <Form />
    <a href="">
      <FontAwesomeIcon icon={["fab", "twitter-square"]} />
    </a>
    <a href="">
      <FontAwesomeIcon icon={["fab", "github-square"]} />
    </a>
    <a href="">
      <FontAwesomeIcon icon={["fab", "linkedin"]} />
    </a>
    <a href="">
      <FontAwesomeIcon icon={["fab", "facebook-square"]} />
    </a>
  </div>
)

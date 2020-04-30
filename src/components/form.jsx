import React from "react"

export default () => (
  <form>
    <div>
      <input type="text" placeholder="First Name" name="firstName" />
      <input type="text" placeholder="Last Name" name="lastName" />
    </div>
    <div>
      <input type="email" placeholder="Enter your email" name="email" />
      <textarea placeholder="Put your message here" name="message" />
    </div>
  </form>
)

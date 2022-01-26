import React from "react"
import spinner from "../images/spinner.svg"

export default function Loader() {
  return <img src={spinner} alt="Loading..." width="300" height="300" />
}

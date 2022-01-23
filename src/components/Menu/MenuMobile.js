import React from "react"
import { Link } from "react-router-dom"
import propTypes from "prop-types"
import styled from "styled-components"
import hamburger from "../../images/icons/hamburger.svg"
import Tooltip from "../Tooltip/Tooltip"

export default function MenuMobile(props) {
  const [isOpen, setIsOpen] = React.useState(false)

  console.log(isOpen)

  return (
    <MenuMobileWrapper>
      <Hamburger
        onClick={() => setIsOpen(isOpen => !isOpen)}
        color="#35d77e"
        src={hamburger}
      />

      <Tooltip isOpen={isOpen} menuItems={props.menuItems} />
    </MenuMobileWrapper>
  )
}

MenuMobile.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
}

const MenuMobileWrapper = styled.div`
  display: none;
  position: relative;

  @media (max-width: 880px) {
    display: block;
  }
`

const Hamburger = styled.img`
  :hover {
    cursor: pointer;
  }
`

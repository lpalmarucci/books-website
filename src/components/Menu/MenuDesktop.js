import React from "react"
import propTypes from "prop-types"
import { Link } from "react-router-dom"
import styled, { keyframes } from "styled-components"
import MenuMobile from "./MenuMobile"

export default function MenuDesktop({ menuItems }) {
  return (
    <MenuWrapper count={menuItems.length}>
      {menuItems.map((item, idx) => (
        <Link to={item.url} key={item.id}>
          <MenuItemWrapper>
            <MenuItem>{item.displayName}</MenuItem>
          </MenuItemWrapper>
        </Link>
      ))}
      <MenuMobile menuItems={menuItems} />
    </MenuWrapper>
  )
}

MenuDesktop.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
}

const MenuWrapper = styled.div`
  justify-self: end;
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(${props => props.count}, 1fr);
  justify-content: center;
  justify-items: center;
  /* position: absolute;
  right: 50px;
  top: 60px; */

  @media (max-width: 880px) {
    > a {
      display: none;
    }
    gap: 0px;
    grid-template-columns: auto;
    /* top: 30px; */
  }
`

const Item = styled.div`
  width: 122px;
  text-align: center;
  padding: 15px 30px;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.3s ease-out;
  :hover {
    box-shadow: inset 0px 0px 0px 2px rgba(255, 255, 255, 0.2);
  }
`

const MenuItem = styled(Item)`
  filter: brightness(120%);

  @media (max-width: 880px) {
    display: none !important;
  }
`

const MenuItemWrapper = styled.div`
  position: relative;
  width: 100%;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
`

import React from "react"
import propTypes from "prop-types"
import { Link } from "react-router-dom"
import styled from "styled-components"
import MenuMobile from "./MenuMobile"

export default function MenuDesktop({ menuItems }) {
  return (
    <MenuWrapper>
      {menuItems.map((item, idx) => (
        <Link to={item.url} key={item.id}>
          <MenuItemWrapper>
            <MenuItem>{item.displayName}</MenuItem>
            <MenuItemBackground className="card-back" />
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
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  gap: 150px;
  grid-template-columns: repeat(${props => props.count}, 1fr);
  justify-content: center;
  justify-items: center;
  position: absolute;
  right: 50px;
  top: 60px;

  @media (max-width: 880px) {
    > a {
      display: none;
    }
    gap: 0px;
    grid-template-columns: auto;
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
  transition: 0.5s ease-out;
  border: 1px solid rgba(255, 255, 255, 0.7);
`

const MenuItem = styled(Item)`
  justify-content: end;
  z-index: 9;
  background-color: #845ec2;

  :hover {
    box-shadow: 0px 10px 20px rgba(255, 255, 255, 0.3),
      inset 0px 0px 0px 1px rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 880px) {
    display: none !important;
  }
`

const MenuItemBackground = styled(Item)`
  transform-origin: top left;
  height: 50px;
  width: 98%;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: rotate(-10deg);
  transform-origin: bottom right;
  z-index: -1;
  background: linear-gradient(120deg, #be93fd 0%, #faccff 100%);
`

const MenuItemWrapper = styled.div`
  position: relative;
  backdrop-filter: blur(100px);
  width: 100%;

  :hover {
    ${MenuItemBackground} {
      transform: rotate(0deg) translateY(-10px);
    }
  }
`

import React, { useEffect } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Tooltip(props) {
  return (
    <Wrapper
      className="tooltip"
      isOpen={props.isOpen}
      count={props.menuItems.length}
    >
      {props.menuItems.map(item => (
        <Link to={item.url} key={item.id}>
          <MenuItem>{item.displayName}</MenuItem>
        </Link>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  opacity: ${props => (props.isOpen ? 1 : 0)};
  display: ${props => (props.isOpen ? "block" : "none")};
  position: absolute;
  display: grid;
  grid-template-columns: repeat(${props => props.count}, 1fr);
  justify-content: center;
  align-items: center;
  gap: 20px;
  z-index: ${props => (props.isOpen ? 999 : -1)};
  backdrop-filter: blur(5px);
  top: 50px;
  right: 0;
  border-radius: 20px;
  padding: 30px 20px;
  box-shadow: 0px 0px 0px 0.5px rgba(255, 255, 255, 0.8);
  transition: 0.5s ease-out;

  transform: ${props =>
    props.isOpen
      ? "skewY(0deg) translateY(0px)"
      : "translateY(-30px) skewY(-10deg) "};

  @media (max-width: 880px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

const MenuItem = styled.div`
  cursor: pointer;
  color: white;
  padding: 20px 50px;
  border-radius: 20px;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  ::after {
    content: "";
    width: 180px;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.7);
  }

  :hover {
    box-shadow: inset 0px -5px 30px rgba(255, 255, 255, 0.2),
      0px 8px 30px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.8);
  }
`

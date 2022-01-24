import React, { useEffect } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Tooltip(props) {
  const handleCloseTooltip = ev => {
    ev.preventDefault()
    console.log(ev.target.closest(".tooltip"))
    if (!ev.target.closest(".tooltip") || ev.target.closest(".tooltip > a")) {
      props.setIsOpen(false)
    } else {
      props.setIsOpen(true)
    }
  }

  React.useEffect(() => {
    if (props.isOpen) {
      window.addEventListener("click", handleCloseTooltip)
    }

    return () => window.removeEventListener("click", handleCloseTooltip)
  }, [props.isOpen])

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
  position: relative;
  cursor: pointer;
  color: white;
  padding: 15px 50px;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 1px;
    color: white;
    background-color: rgba(255, 255, 255, 0.7);
  }

  :hover {
    transform: translateX(10px);
  }
`

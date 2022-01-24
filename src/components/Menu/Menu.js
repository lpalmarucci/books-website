import React, { useState } from "react"
import propTypes from "prop-types"
import MenuDesktop from "./MenuDesktop"
import styled from "styled-components"
import { Link } from "react-router-dom"

const menuItems = [
  { id: 1, displayName: "Search", url: "/search" },
  { id: 2, displayName: "Saved", url: "/books/saved" },
]

export default function Menu() {
  return (
    <Wrapper
    //   className={`container menu-container ${
    //     isMobile ? "menu-container-mobile" : ""
    //   }`}
    >
      <ContentWrapper count={menuItems.length}>
        <Title>
          <Link to="/">Books</Link>
        </Title>
        <MenuDesktop menuItems={menuItems} />
      </ContentWrapper>
    </Wrapper>
  )
}

Menu.propTypes = {
  menuItems: propTypes.arrayOf(propTypes.object).isRequired,
}

const Wrapper = styled.header`
  width: 100%;
  padding: 50px;

  @media (max-width: 880px) {
    padding-top: 30px;
  }
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
  justify-content: space-between;
`

const Title = styled.h2`
  background: linear-gradient(120deg, #c599ff 0%, rgb(217, 190, 253) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  cursor: pointer;
  font-size: 40px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  @media (max-width: 880px) {
    font-size: 30px;
  }

  :hover {
    filter: hue-rotate(20deg);
  }
`

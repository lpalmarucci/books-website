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
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 880px) {
    padding: 30px;
  }
`

const ContentWrapper = styled.div``

const Title = styled.h2`
  background: linear-gradient(120deg, #c599ff 0%, rgb(217, 190, 253) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  cursor: pointer;
`

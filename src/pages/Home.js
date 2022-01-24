import React from "react"
import SearchBox from "../components/SearchBox"
import BooksContainer from "../components/BooksContainer"
import styled from "styled-components"

export default function Home() {
  return (
    <Wrapper>
      <Title>Books Website</Title>
      <SearchBox />
      <BooksContainer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  padding: 80px 20px 10px 20px;
  display: grid;
  grid-template-rows: 50px 144px auto;
  gap: 40px;
`

const Title = styled.h1`
  font-size: 60px;
  color: white;
  text-align: center;
`

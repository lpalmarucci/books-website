import React from "react"
import SearchBox from "../components/SearchBox"
import BooksContainer from "../components/BooksContainer"
import styled from "styled-components"
import TitleAnimation from "../components/animations/TitleAnimation"

export default function Home() {
  return (
    <Wrapper>
      <TitleWrapper>
        <TitleAnimation>Books Website</TitleAnimation>
      </TitleWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  padding: 80px 20px 10px 20px;
  display: grid;
  grid-template-rows: 150px 144px auto;
  gap: 40px;
`
const TitleWrapper = styled.div`
  text-align: center;
`

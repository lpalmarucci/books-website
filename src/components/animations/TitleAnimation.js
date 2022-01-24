import React from "react"
import styled, { keyframes } from "styled-components"

export default function TitleAnimation() {
  return <Title>Books Website</Title>
}

const animation = keyframes`
    
    0%{
        transform: translateY(-10px);
        letter-spacing: 0em;
        filter: hue-rotate(0deg);
    }

    100%{
        transform: translateY(10px);
        letter-spacing: .015em;
        filter: hue-rotate(20deg);
    }
`

const Title = styled.h1`
  font-size: 70px;
  color: white;
  padding: 10px;
  background: linear-gradient(120deg, var(--yellow) 20%, #fff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 800;
  outline: none;

  animation: ${animation} 3s ease-in alternate infinite;

  @media (max-width: 880px) {
    font-size: 50px;
  }
`

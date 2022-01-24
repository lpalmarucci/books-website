import React from "react"
import styled from "styled-components"
import Wave1 from "../../images/waves/hero-wave1.svg"
import Wave2 from "../../images/waves/hero-wave2.svg"
import Wave3 from "../../images/waves/hero-wave3.svg"

export default function WaveBackground() {
  return (
    <Wrapper>
      <Background />
      {/* <Card /> */}
      <TopWave src={Wave1} />
      <Wave src={Wave2} style={{ top: "450px" }} />
      <BottomWave src={Wave3} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
`

const Wave = styled.img`
  z-index: -2;
  position: absolute;

  @media (min-width: 1440px) {
    width: 100%;
  }
`

const Background = styled.div`
  width: 100%;
  background: linear-gradient(180deg, var(--green-hover) 0%, #fff 100%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 800px;
  z-index: -3;
`
const TopWave = styled(Wave)`
  top: 120px;
  /* filter: blur(5px); */
`

const BottomWave = styled(Wave)`
  /* bottom: -40px; */
  top: 750px;
  filter: blur(20px);
  /* filter: blur(10px); */
`

// const Card = styled.div`
//   overflow: hidden;
//   width: 400px;
//   height: 400px;
//   transform: rotate(45deg);
//   /* background-color: #ff6869;
//   bor */
//   border: 20px solid #ff6869;
//   border-radius: 30px;
//   position: absolute;
//   top: 166px;
//   right: 30px;
//   filter: blur(30px);
// `

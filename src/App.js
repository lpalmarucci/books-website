import React from "react"
import Menu from "./components/Menu/Menu"
import SavedPopupContext, { PopupContext } from "./context/SavedPopupContext"
import Popup from "./components/Popup"
import Routes from "./components/Routes"
import styled from "styled-components"
import WaveBackground from "./components/background/WaveBackground"

export default function App() {
  return (
    <AppWrapper>
      <WaveBackground />
      <Menu />
      <ContentWrapper>
        <SavedPopupContext>
          <PopupContext.Consumer>
            {({ showPopup }) => {
              if (showPopup) {
                return (
                  <React.Fragment>
                    <Routes />
                    <Popup />
                  </React.Fragment>
                )
              }
              return (
                <React.Fragment>
                  <Routes />
                </React.Fragment>
              )
            }}
          </PopupContext.Consumer>
        </SavedPopupContext>
      </ContentWrapper>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
`

const ContentWrapper = styled.div`
  margin-top: 50px;
`

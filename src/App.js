import React from "react"
import Menu from "./components/Menu/Menu"
import SavedPopupContext, { PopupContext } from "./context/SavedPopupContext"
import Popup from "./components/Popup"
import Routes from "./components/Routes"
import styled from "styled-components"

const menuItems = [
  {
    id: 1,
    displayName: "Saved",
    url: "/books/saved",
  },
]

export default function App() {
  return (
    <AppWrapper>
      <Menu menuItems={menuItems} />
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
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #845ec2;
`

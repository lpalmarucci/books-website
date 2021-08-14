import React from 'react';
import Menu from './components/Menu/Menu';
import SavedPopupContext, { PopupContext } from './context/SavedPopupContext'
import Popup from './components/Popup';
import Routes from './components/Routes';

const menuItems = [
  {
    id: 1,
    displayName: 'Home',
    url: '/'
  },
  {
    id: 2,
    displayName: 'Saved',
    url: '/books/saved'
  }
];

export default function App() {
  return (
    <>
      <Menu items={menuItems} />
      <SavedPopupContext>
        <PopupContext.Consumer>
          {({ showPopup }) => {
            if (showPopup) {
              return <React.Fragment>
                <Routes />
                <Popup />
              </React.Fragment>
            }
            return <React.Fragment>
              <Routes />
            </React.Fragment>;
          }}
        </PopupContext.Consumer>
      </SavedPopupContext>
    </>
  );
}

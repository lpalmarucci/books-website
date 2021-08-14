import React from 'react'
import propTypes from 'prop-types'

export const PopupContext = React.createContext();

export const usePopupContext = () => {
    return React.useContext(PopupContext)
}

export default function PopupContextProvider(props) {

    const [
        showPopup,
        setShowPopup
    ] = React.useState(false);


    const updateStatePopup = (status) => {
        setShowPopup(status);
    }

    return (
        <PopupContext.Provider value={{
            showPopup,
            updateStatePopup
        }}>
            {props.children}
        </PopupContext.Provider>
    )
}

PopupContextProvider.propTypes = {
    children: propTypes.instanceOf(Object).isRequired
}
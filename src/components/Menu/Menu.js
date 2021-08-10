import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import propTypes from 'prop-types'
import CheckMobileResolution from '../CheckMobileResolution'
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';

export default function Menu(props) {

    const [
        isMobile,
        setIsMobile
    ] = useState(null);

    return (
        <header className={`container menu-container ${isMobile
            ? 'menu-container-mobile'
            : ''}`}>
            <CheckMobileResolution setIsMobile={setIsMobile} />
            {isMobile
                ? <MenuMobile items={props.items} />
                : <MenuDesktop items={props.items} />}
        </header>
    )
}

Menu.propTypes = {
    items: propTypes.arrayOf(propTypes.object).isRequired
}

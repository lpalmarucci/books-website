import React from 'react'
import propTypes from 'prop-types'
// import { detectIfMobileWidth } from '../lib/checkIfMobile'

export default function CheckMobileResolution({ setIsMobile }) {

    const detectIfMobileWidth = (obj) => {
        console.log(
            'obj ',
            obj.innerWidth
        )
        return obj.innerWidth < 768;
    }

    const setMobileResolution = (e) => {
        const isMobile = detectIfMobileWidth(e);
        console.log(
            'isMobile ',
            isMobile
        )
        setIsMobile(isMobile);
    }

    React.useEffect(
        () => {

            setMobileResolution(window);

            window.addEventListener(
                'resize',
                (e) => setMobileResolution(e.target)
            )

            return window.removeEventListener(
                'resize',
                setMobileResolution
            )
        },
        []
    );

    return (
        <React.Fragment>
        </React.Fragment>
    )
}

CheckMobileResolution.propTypes = {
    setIsMobile: propTypes.instanceOf(Function).isRequired
}
import React from 'react'
import GoBackButton from '../GoBackButton'
import propTypes from 'prop-types'

export default function BookContainerHeader(props) {
    return (
        <header>
            {props.drawGoBack
                ? <GoBackButton destination={'/'} />
                : ''}

        </header>
    )
}

BookContainerHeader.propTypes = {
    drawGoBack: propTypes.bool.isRequired
}
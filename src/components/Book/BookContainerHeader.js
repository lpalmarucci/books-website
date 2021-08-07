import React from 'react'
import GoBackButton from '../GoBackButton'
import propTypes from 'prop-types'
import DeleteSavedBook from './DeleteSavedBook'

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
    drawGoBack: propTypes.instanceOf(Boolean).isRequired
}
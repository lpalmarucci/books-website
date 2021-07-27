import React from 'react'
import close from '../../images/icons/close.svg'
import propTypes from 'prop-types'

export default function DeleteSavedBook({ onClickFn }) {

    return (
        <div onClick={onClickFn}>
            <img src={close} alt="Close" className="icon delete-saved-book" width="50" height="50" />
        </div>
    )
}

DeleteSavedBook.propTypes = {
    onClickFn: propTypes.instanceOf(Function).isRequired
}

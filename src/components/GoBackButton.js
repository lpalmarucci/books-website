import React from 'react'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import propTypes from 'prop-types'

export default function GoBackButton(props) {
    return (
        <div>
            <Link to={props.destination} className="clear-link" style={{ color: 'white' }}>
                <button type="button" className="button goback-button">
                    <BiArrowBack className="goback-icon" />
                    <span>Return to books</span>
                </button>
            </Link>
        </div>
    )
}

GoBackButton.propTypes = {
    destination: propTypes.string.isRequired
}

GoBackButton.defaultProps = {
    destination: '/'
}

import React from 'react'
import propTypes from 'prop-types'

export default function Popup(props) {
    return (
        <div className="popup" ref={props.lineaRef} onAnimationEnd={props.handleAnimationEnd}>
            {props.text}
        </div>
    )
}

Popup.defaultProps = {
    text: 'Please, specify a text'
}

Popup.propTypes = {
    text: propTypes.string.isRequired,
    lineaRef: propTypes.object.isRequired,
    handleAnimationEnd: propTypes.instanceOf(Function).isRequired
}

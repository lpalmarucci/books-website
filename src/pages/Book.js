import React from 'react'
import BookContainerHeader from '../components/Book/BookContainerHeader'
import BookContainerBody from '../components/Book/BookContainerBody'
import propTypes from 'prop-types'

export default function Book(props) {

    const draw = props.drawGoBack

    const bookId = props.match?.params?.id || props.id;

    return (
        <div className="container">
            <BookContainerHeader drawGoBack={draw} bookId={bookId} />
            <BookContainerBody bookId={bookId} drawDeleteButton={props.drawDeleteButton} />
        </div>
    )
}

Book.defaultProps = {
    drawGoBack: false
}

Book.propTypes = {
    match: propTypes.shape({
        params: propTypes.shape({
            id: propTypes.string.isRequired
        })
    }),
    id: propTypes.string.isRequired,
    drawGoBack: propTypes.bool.isRequired,
    drawDeleteButton: propTypes.bool.isRequired
}
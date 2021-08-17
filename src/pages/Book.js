import React from 'react'
import BookContainerHeader from '../components/Book/BookContainerHeader'
import BookContainerBody from '../components/Book/BookContainerBody'
import propTypes from 'prop-types'
import { useParams } from 'react-router-dom'

export default function Book(props) {

    const urlParams = useParams();

    let draw;
    if (props.drawGoBack || props.drawGoBack !== null) {
        draw = props.drawGoBack
    } else {
        draw = true;
    }

    const bookId = urlParams?.id || props.id;

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
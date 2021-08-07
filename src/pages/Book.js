import React from 'react'
import BookContainerHeader from '../components/Book/BookContainerHeader'
import BookContainerBody from '../components/Book/BookContainerBody'

export default function Book(props) {

    const draw = props.drawGoBack || props.drawGoBack != undefined
        ? props.drawGoBack
        : true;

    const bookId = props.match?.params?.id || props.id;

    return (
        <div className="container">
            <BookContainerHeader drawGoBack={draw} bookId={bookId} />
            <BookContainerBody bookId={bookId} drawDeleteButton={props.drawDeleteButton} />
        </div>
    )
}

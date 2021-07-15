import React from 'react'
import BookContainerHeader from '../components/Book/BookContainerHeader'
import BookContainerBody from '../components/Book/BookContainerBody'

export default function Book(props) {

    return (
        <div className="container">
            <BookContainerHeader />
            <BookContainerBody id={props.match.params.id} />
        </div>
    )
}

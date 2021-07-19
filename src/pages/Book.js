import React from 'react'
import BookContainerHeader from '../components/Book/BookContainerHeader'
import BookContainerBody from '../components/Book/BookContainerBody'

export default function Book(props) {

    console.log(
        `props --> `,
        props
    );

    return (
        <div className="container">
            <BookContainerHeader />
            <BookContainerBody matchProps={props.match} />
        </div>
    )
}

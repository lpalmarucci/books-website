import React from 'react'
import BookContainerHeader from '../components/Book/BookContainerHeader'
import BookContainerBody from '../components/Book/BookContainerBody'

export default function Book(props) {

    const draw = props.drawGoBack || props.drawGoBack != undefined
        ? props.drawGoBack
        : true;

    return (
        <div className="container">
            <BookContainerHeader drawGoBack={draw} />
            <BookContainerBody id={props.match?.params?.id || props.id} />
        </div>
    )
}

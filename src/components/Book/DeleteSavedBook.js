import React, { useState, useContext } from 'react'
import close from '../../images/icons/close.svg'
import propTypes from 'prop-types'
import { useSavedBooks } from '../../context/SavedBooksContext'

export default function DeleteSavedBook(props) {

    const { books, updateBooks } = useSavedBooks();

    const handleClick = () => {
        const newBooks = books.filter((book) => book.id !== props.bookId);
        updateBooks(newBooks);
    }

    return (
        <div onClick={handleClick}>
            <img src={close} alt="Close" className="icon delete-saved-book" width="50" height="50" />
        </div>
    )
}

DeleteSavedBook.propTypes = {
    bookId: propTypes.string.isRequired
}

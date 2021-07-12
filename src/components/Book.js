import React from 'react'
import propTypes from 'prop-types'

const Book = ({
    authors,
    categories,
    image,
    publisher,
    date,
    title
}) => {

    return (
        <section className="book">
            <h3>{title}</h3>
            <div className="book-row">
                <b>Authors: </b>
                <span>{authors}</span>
            </div>
            <div className="book-row">
                <b>Category: </b><span>{categories}</span>
            </div>
            <div className="book-row">
                <b>Published By: </b><span>{publisher}</span>
            </div>
            <div className="book-row">
                <b>Released at </b><span>{date}</span>
            </div>

            <div className="book-row" style={{ display: 'inline-block' }}>
                <img src={image} alt={title} />
            </div>
        </section>
    )
}

Book.defaultValue = {
    authors: '',
    categories: '',
    image: '',
    description: '',
    publisher: '',
    publishDate: '',
    title: ''
}

/*
 * Book.propTypes = {
 *     authors: propTypes.string.isRequired,
 *     categories: propTypes.string.isRequired,
 *     image: propTypes.string.isRequired,
 *     publisher: propTypes.string.isRequired,
 *     publishedDate: propTypes.string.isRequired,
 *     title: propTypes.string.isRequired
 */

// }


export default Book;

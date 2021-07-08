import React from 'react'
import propTypes from 'prop-types'

const Book = ({
    authors,
    categories,
    image,
    publisher,
    publishDate,
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
                <b>Released at </b><span>{publishDate}</span>
            </div>

            <div className="book-row" style={{ display: 'inline-block' }}>
                <img src={image} alt={title} />
            </div>
        </section>
    )
}

/*
 * Book.defaultValue = {
 *     authors: propTypes.string.isRequired,
 *     categories: propTypes.string.isRequired,
 *     image: propTypes.string.isRequired,
 *     description: propTypes.string.isRequired,
 *     publisher: propTypes.string.isRequired,
 *     publishDate: propTypes.string.isRequired,
 *     title: propTypes.string.isRequired
 * }
 */

export default Book;

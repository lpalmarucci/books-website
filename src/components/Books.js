import React from 'react'
import Book from './Book'
import propTypes from 'prop-types'
import { formatDate } from '../lib/date'

export default function Books({ books }) {

    return (
        <div className="books">
            {books.map((book) => {
                { /* Console.log(book); */ }
                const {
                    publisher,
                    publishedDate,
                    title,
                    imageLinks
                } = book.volumeInfo;
                const authors = book.volumeInfo.authors?.join(', ');
                const categories = book.volumeInfo.categories?.join(' ');
                let date;
                if (publishedDate.length > 0) {
                    date = formatDate(new Date(publishedDate));
                }

                const image = imageLinks?.smallThumbnail;
                const newBook = {
                    authors,
                    publisher,
                    date,
                    title,
                    categories,
                    image
                };
                return <Book key={book.id} {...newBook} />
            })}
        </div>
    )
}

Books.propTypes = {
    books: propTypes.arrayOf(propTypes.object).isRequired
}

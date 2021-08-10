import React, { useState, useEffect } from 'react'
import Loader from '../Loader'
import { useSelector } from 'react-redux';
import Book from '../../pages/Book';
import PropTypes from 'prop-types'
import BookDetailed from './BookDetailed';
import Pricing from '../Pricing'
import CheckMobileResolution from '../CheckMobileResolution'

export default function BookContainerBody(props) {

    const [
        isLoading,
        setIsLoading
    ] = useState(true);
    const [
        book,
        setBook
    ] = useState({});

    const [
        isMobile,
        setIsMobile
    ] = useState(null);

    const books = useSelector((state) => state.books.items);

    useEffect(() => {
        setIsLoading(true);

        const filtered = books.filter((item) => item.id === props.bookId)
        setBook(filtered[0]);

        setIsLoading(false);
    })

    if (book === {} || isLoading) {
        return <Loader />
    }

    console.log(
        'isMobile ',
        isMobile
    );

    return (

        <section className={`container book ${isMobile
            ? 'book-md'
            : 'book-lg'}`}>
            <CheckMobileResolution setIsMobile={setIsMobile} />
            {book?.volumeInfo != undefined && <BookDetailed book={book} drawDeleteButton={props.drawDeleteButton} />}
            {book?.saleInfo != undefined && <Pricing saleInfo={book.saleInfo} />}
        </section>
    )
}

BookContainerBody.propTypes = {
    bookId: PropTypes.string.isRequired
}

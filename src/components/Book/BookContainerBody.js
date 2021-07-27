import React, { useState, useEffect } from 'react'
import Loader from '../Loader'
import { useSelector } from 'react-redux';
import Book from '../../pages/Book';
import PropTypes from 'prop-types'
import BookDetailed from './BookDetailed';
import Pricing from '../Pricing'

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

    // Inserire nello stato l'url (anche se non è una bella cosa)
    const detectIfMobileWidth = (obj) => {
        if (obj.innerWidth < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    useEffect(() => {
        setIsLoading(true);

        detectIfMobileWidth(window);

        const filtered = books.filter((item) => item.id === props.bookId)
        setBook(filtered[0]);

        setIsLoading(false);

        window.addEventListener(
            'resize',
            (e) => detectIfMobileWidth(e.target)
        )

        /*
         * Return window.removeEventListener(
         *     'resize',
         *     detectIfMobileWidth
         * )
         */
    })

    if (book === {} || isLoading) {
        return <Loader />
    }
    // Se la dimensione è in modalità mobile, cambiare la classe in book-md

    console.log(
        'book --> ',
        book
    );
    return (

        <section className={`container book ${isMobile
            ? 'book-md'
            : 'book-lg'}`}>
            {book.volumeInfo != undefined && <BookDetailed book={book} />}
            {/* {book.saleInfo != undefined && <Pricing saleInfo={book.saleInfo} />} */}
        </section>
    )
}

BookContainerBody.propTypes = {
    bookId: PropTypes.string.isRequired
}

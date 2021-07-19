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
    ] = useState(false);

    const books = useSelector((state) => state.books.items);

    // Inserire nello stato l'url (anche se non è una bella cosa)
    const detectIfMobileWidth = (e) => {
        if (e.target.innerWidth < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    useEffect(() => {
        setIsLoading(true);

        const filtered = books.filter((book) => book.id === props.matchProps?.params?.id)
        console.log(
            'filtered --> ',
            filtered
        );
        setBook(filtered[0]);

        setIsLoading(false);

        window.addEventListener(
            'resize',
            detectIfMobileWidth
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
    console.log(
        'book --> ',
        book
    );
    // Se la dimensione è in modalità mobile, cambiare la classe in book-md
    return (

        <section className={`container book ${isMobile
            ? 'book-md'
            : 'book-lg'}`}>
            <BookDetailed book={book} />
            <Pricing saleInfo={book.saleInfo} />
        </section>
    )
}

Book.propTypes = {
    id: PropTypes.string.isRequired
}

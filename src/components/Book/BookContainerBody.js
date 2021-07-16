import React, { useState, useEffect } from 'react'
import Loader from '../Loader'
import { useSelector } from 'react-redux';

export default function BookContainerBody(props) {
    const [
        isLoading,
        setIsLoading
    ] = useState(false);
    const [
        book,
        setBook
    ] = useState(false);

    const books = useSelector((state) => state.books.items);

    // Inserire nello stato l'url (anche se non è una bella cosa)


    useEffect(
        () => {

            setIsLoading(true);
            console.log(books);
            const filtered = books.filter((book) => book.id === props.id)

            console.log(filtered);

            /*
             * Axios.get(url).then((res) => {
             *     console.log(res);
             */

            /*
             *     SetIsLoading(false);
             * })
             */
        },
        []
    )

    if (isLoading) {
        return <Loader />
    }

    return (
        <section className="container book book-lg">
            <header>
                <h1>Information about AAAA</h1>
            </header>
            <main>

                <div>
                    {props.id}
                </div>
            </main>
        </section>
    )
}

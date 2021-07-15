import React, { useState } from 'react'
import axios from 'axios'
import Loader from '../Loader'

export default function BookContainerBody(props) {
    const [
        isLoading,
        setIsLoading
    ] = React.useState(false);
    const [
        book,
        setBook
    ] = React.useState(false);

    // Inserire nello stato l'url (anche se non è una bella cosa)


    useEffect(
        () => {
            console.log(window.env.GOOGLE_BOOKS_API);
            setIsLoading(true);
            axios.get(url).then((res) => {
                console.log(res);

                setIsLoading(false);
            })
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

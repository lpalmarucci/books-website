/* eslint-disable func-style */
/* eslint-disable func-names */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from '../components/Loader'

export const SavedBooksContext = React.createContext();

export const useSavedBooks = function () {
    return React.useContext(SavedBooksContext)
}

export function SavedBooksProvider(props) {

    const [
        books,
        setBooks
    ] = useState([]);

    const [
        loading,
        setLoading
    ] = useState(true);

    const updateBooks = (items) => {
        setBooks(items);
    }

    useEffect(
        () => {
            setLoading(true);
            const booksList = JSON.parse(localStorage.getItem('books'));
            if (booksList) {
                const newBooks = booksList.map((book) => {
                    return new Promise((resolve, reject) => {
                        return axios.get(`${process.env.REACT_APP_GOOGLE_BOOKS_API}/${book.id}`).then((res) => {
                            if (res.status != 200) {
                                reject('Error while getting information about the book');
                            }
                            resolve(res.data);
                        })
                    })
                });
                Promise.all(newBooks).then((res) => {
                    setBooks(res);
                    setLoading(false);
                });
            } else {
                setLoading(false);
            }
        },
        []
    );

    useEffect(
        () => {
            localStorage.removeItem('books');
            const storageBooks = books.map((book) => ({ id: book.id }));
            localStorage.setItem(
                'books',
                JSON.stringify(storageBooks)
            );
        },
        [books]
    );

    if (loading) {
        return <Loader />
    }

    return (
        <SavedBooksContext.Provider value={{
            books,
            updateBooks
        }}>
            {props.children}
        </SavedBooksContext.Provider>
    )
}


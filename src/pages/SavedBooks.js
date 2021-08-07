import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DeleteSavedBook from '../components/Book/DeleteSavedBook';
import GoBackButton from '../components/GoBackButton';
import Loader from '../components/Loader'
import Book from './Book';

export default class SavedBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            isLoading: true
        };
        this.deleteBook = this.deleteBook.bind(this);
    }

    componentDidMount() {
        const booksList = JSON.parse(localStorage.getItem('books'));
        if (booksList) {
            const books = booksList.map((book) => {
                return new Promise((resolve, reject) => {
                    return axios.get(`${process.env.REACT_APP_GOOGLE_BOOKS_API}/${book.id}`).then((res) => {
                        if (res.status != 200) {
                            reject('Error while getting information about the book');
                        }
                        resolve(res.data);
                    })
                })
            });
            Promise.all(books).then((res) => {
                this.setState({
                    books: res,
                    isLoading: false
                });
            });
        } else {
            this.setState((prevState) => ({
                ...prevState,
                isLoading: false
            }));
        }
    }

    deleteBook(id) {
        let books = this.state.books.slice();
        books = books.filter((book) => book.id !== id);

        /*
         * this.setState({
         *     books,
         *     isLoading: false
         * });
         */

        const idBooks = books.map((book) => ({ id: book.id }))

        localStorage.removeItem('books');
        localStorage.setItem(
            'books',
            JSON.stringify(idBooks)
        );

    }

    render() {
        if (this.state.isLoading) {
            return <Loader />
        }

        return (
            <div className="container">
                <GoBackButton destination={'/'} />
                <article className="container">
                    <header>
                        <h1>Libri salvati</h1>
                    </header>
                    <section className="container">
                        {this.state.books.length === 0
                            ? <h2>Nessun libro salvato</h2>
                            : this.state.books.map((book) => (
                                <article key={book.id} className="relative-parent">
                                    <Book id={book.id} drawGoBack={false} drawDeleteButton={true} />
                                </article>
                            ))
                        }
                    </section>
                </article>
            </div>
        )
    }
}


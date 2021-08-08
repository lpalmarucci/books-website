import React, { Component } from 'react'
import GoBackButton from '../components/GoBackButton';
import Loader from '../components/Loader'
import Book from './Book';
import { SavedBooksContext, SavedBooksProvider } from '../context/SavedBooksContext'

export default class SavedBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            isLoading: false
        };
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
                        <SavedBooksProvider>
                            <SavedBooksContext.Consumer>
                                {({ books }) => {
                                    if (books.length === 0) {
                                        return <h2>Nessun libro salvato</h2>
                                    }
                                    return books.map((book) => (
                                        <article key={book.id} className="relative-parent">
                                            <Book id={book.id} drawGoBack={false} drawDeleteButton={true} />
                                        </article>
                                    ))
                                }}
                            </SavedBooksContext.Consumer>
                        </SavedBooksProvider>
                    </section>
                </article>
            </div>
        )
    }
}


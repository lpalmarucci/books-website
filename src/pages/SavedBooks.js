import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import GoBackButton from '../components/GoBackButton';
import Loader from '../components/Loader'

export default class SavedBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        const booksList = JSON.parse(localStorage.getItem('books'));
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
            this.setState({ books: res });
        });
    }

    render() {
        console.log(this.state.books);
        if (this.state.books.length === 0) {
            return <Loader />
        }

        return (
            <div className="container">
                <GoBackButton destination={'/'} />
                <article className="container">
                    <header>
                        <h2>Libri salvati</h2>
                    </header>
                    <section className="container">
                        {this.state.books.map((book) => (
                            <div key={book.id}>{book.id}</div>
                        ))}
                    </section>
                </article>
            </div>
        )
    }
}


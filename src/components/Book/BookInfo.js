import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import propTypes from 'prop-types'
import Popup from '../Popup';

export default class Book extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hoverClass: '',
            showSavedMsg: false,
            textPopup: ''
        };
        this.popupRef = React.createRef();
        this.showHideMoreButton = this.showHideMoreButton.bind(this);
        this.showPopup = this.showPopup.bind(this);
        this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
    }

    showHideMoreButton(val) {
        this.setState({
            hoverClass: val
                ? 'outline-button-hover'
                : ''
        });
    }

    showPopup(text) {
        console.log(this.state.showSavedMsg);
        if (!this.state.showSavedMsg) {
            this.setState({
                showSavedMsg: true,
                textPopup: text
            })
        }
    }

    handleAnimationEnd() {
        this.setState(
            { showSavedMsg: false },
            () => console.log(this.state)
        );
    }

    saveBook(id) {
        const books = JSON.parse(localStorage.getItem('books'));

        const alreadySaved = books.find((book) => book.id === id);

        if (alreadySaved) {
            this.showPopup('Libro già inserito nella raccolta');

        } else {
            localStorage.setItem(
                'books',
                books
                    ? JSON.stringify([
                        ...books,
                        { id }
                    ])
                    : JSON.stringify([{ id }])
            )
            this.showPopup('Libro aggiunto alla raccolta');
        }
    }

    render() {
        return (
            <>
                <section
                    className="book book-md"
                    onMouseOver={() => {
                        this.showHideMoreButton(true)
                    }}
                    onMouseOut={() => {
                        this.showHideMoreButton(false)
                    }}
                >
                    <h3>{this.props.title}</h3>
                    <div className="book-row">
                        <b>Authors: </b>
                        <span>{this.props.authors}</span>
                    </div>
                    <div className="book-row">
                        <b>Category: </b><span>{this.props.categories}</span>
                    </div>
                    <div className="book-row">
                        <b>Published By: </b><span>{this.props.publisher}</span>
                    </div>
                    <div className="book-row">
                        <b>Released at </b><span>{this.props.date}</span>
                    </div>

                    {this.state.showSavedMsg && <Popup lineaRef={this.popupRef} text={this.state.textPopup} handleAnimationEnd={this.handleAnimationEnd} />}

                    {this.props.image && <div className="book-row" style={{ display: 'inline-block' }}>
                        <img src={this.props.image} alt={this.props.title} />
                    </div>}
                    <div className="hover-buttons">
                        <Link to={`/book/${this.props.id}`} className="clear-link">
                            <button className={`outline-button ${this.state.hoverClass}`
                            }>
                                About it
                            </button>
                        </Link>
                        <button className={`outline-button clear-links ${this.state.hoverClass}`} onClick={() => this.saveBook(this.props.id)}>
                            Save
                        </button>
                    </div>
                </section>
            </>
        )
    }
}

Book.propTypes = {
    authors: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    categories: propTypes.string.isRequired,
    publisher: propTypes.string.isRequired,
    date: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
    id: propTypes.string.isRequired
}
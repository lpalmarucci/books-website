import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Book extends Component {

    constructor(props) {
        super(props);
        this.showHideMoreButton = this.showHideMoreButton.bind(this);
        this.state = {
            hoverClass: ''
        };
    }

    showHideMoreButton(val) {
        this.setState({
            hoverClass: val
                ? 'outline-button-hover'
                : ''
        });
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
                        <button className={`outline-button clear-links ${this.state.hoverClass}`}>
                            Save
                        </button>
                    </div>
                </section>
            </>
        )
    }
}

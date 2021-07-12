/*
 * Import React, { useEffect } from 'react'
 * import more from '../images/more.png'
 */

/*
 * Const Book = ({
 *     authors,
 *     categories,
 *     image,
 *     publisher,
 *     date,
 *     title
 * }) => {
 */

//     Const showMoreButton = (e) => {

//     }

/*
 *     UseEffect(
 *         () => {
 *             document.getElementsByClassName('book').addEventListener(
 *                 'hover',
 *                 showMoreButton
 *             );
 */

/*
 *             Return () => {
 *                 document.getElementsByClassName('book').removeeventListener(
 *                     'hover',
 *                     showMoreButton
 *                 );
 *             }
 *         },
 *         []
 *     );
 */

/*
 *     Return (
 *         <section className="book">
 *             <h3>{title}</h3>
 *             <div className="book-row">
 *                 <b>Authors: </b>
 *                 <span>{authors}</span>
 *             </div>
 *             <div className="book-row">
 *                 <b>Category: </b><span>{categories}</span>
 *             </div>
 *             <div className="book-row">
 *                 <b>Published By: </b><span>{publisher}</span>
 *             </div>
 *             <div className="book-row">
 *                 <b>Released at </b><span>{date}</span>
 *             </div>
 */

/*
 *             <div className="book-row" style={{ display: 'inline-block' }}>
 *                 <img src={image} alt={title} />
 *             </div>
 */

/*
 *             <img src={more} alt="Get more info" className="more-img" />
 *         </section>
 *     )
 * }
 */

/*
 * Book.defaultValue = {
 *     authors: '',
 *     categories: '',
 *     image: '',
 *     description: '',
 *     publisher: '',
 *     publishDate: '',
 *     title: ''
 * }
 */

// /*
//  * Book.propTypes = {
//  *     Authors: propTypes.string.isRequired,
//  *     Categories: propTypes.string.isRequired,
//  *     Image: propTypes.string.isRequired,
//  *     Publisher: propTypes.string.isRequired,
//  *     PublishedDate: propTypes.string.isRequired,
//  *     Title: propTypes.string.isRequired
//  */

// // }


// Export default Book;

import React, { Component } from 'react'
import more from '../images/more.png'

export default class Book extends Component {


    constructor(props) {
        super(props);
        this.showHideMoreButton = this.showHideMoreButton.bind(this);
        this.state = {
            showMoreInfo: false
        };
    }


    showHideMoreButton(val) {

        this.setState({ showMoreInfo: val })

    }

    render() {
        return (
            <>
                <section
                    className="book"
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

                    <div className="book-row" style={{ display: 'inline-block' }}>
                        <img src={this.props.image} alt={this.props.title} />
                    </div>
                    <button className={`more ${this.state.showMoreInfo
                        ? "more-hover"
                        : ''}`
                    }>About it</button>
                </section>
            </>
        )
    }
}

// <img src={more} alt="Get more info" className="more-img" />


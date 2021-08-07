import React from 'react'
import propTypes from 'prop-types'
import DeleteSavedBook from './DeleteSavedBook';

export default function BookDetailed(props) {

    const {
        title,
        imageLinks,
        description
    } = props.book.volumeInfo;
    const authors = props.book.volumeInfo.authors?.join(', ');
    const categories = props.book.volumeInfo.categories?.join(' ');
    let year = '';
    if (props.book.volumeInfo.publishedDate?.length > 0) {
        year = new Date(props.book.volumeInfo.publishedDate).getFullYear();
    }
    const numPages = props.book.volumeInfo?.pageCount;
    const image = imageLinks?.smallThumbnail;
    return (
        <>
            <header style={{ position: 'relative' }}>
                <h1><i>Information about</i> {title}</h1>
                {image
                    ? <img src={image} alt="Copertina" />
                    : <h3>No preview available</h3>}
                {props.drawDeleteButton && <DeleteSavedBook onClickFn={() => this.deleteBook(book.id)} />}

            </header>
            <main>
                <div className="book-body">
                    <span className="book-section">
                        <b>{title}</b> è un libro scritto da {authors} pubblicato nel {year}.
                        Appartiene al genere <b>{categories}</b> e conta {numPages} pagine
                    </span>
                    {description && <article className="book-section">
                        <header>
                            <h3 className="section-title">Trama</h3>
                        </header>
                        <section>
                            <div>
                                {description}
                            </div>
                        </section>
                    </article>}
                </div>
            </main>
        </>
    )
}

BookDetailed.propTypes = {
    book: propTypes.shape({
        volumeInfo: propTypes.shape({
            title: propTypes.string.isRequired,
            imageLinks: propTypes.string.isRequired,
            description: propTypes.string.isRequired,
            authors: propTypes.instanceOf(Array) || propTypes.instanceOf(String),
            categories: propTypes.instanceOf(Array),
            publishedDate: propTypes.instanceOf(Date),
            pageCount: propTypes.number.isRequired
        })
    }).isRequired,
    drawDeleteButton: propTypes.bool.isRequired
}

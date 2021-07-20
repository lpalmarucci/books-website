import React from 'react'

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
            <header>
                <h1><i>Information about</i> {title}</h1>
                {image
                    ? <img src={image} alt="Copertina" />
                    : <h3>No preview available</h3>}
            </header>
            <main>
                <div className="book-body">
                    <span className="book-section">
                        <b>{title}</b> è un libro scritto da {authors} pubblicato nel {year}.
                        Appartiene al genere <b>{categories}</b> e conta {numPages} pagine
                    </span>
                    {description && <div className="book-section">
                        <h3 className="section-title">Trama</h3>
                        <div>
                            {description}
                        </div>
                    </div>}
                </div>

            </main>
        </>
    )
}

import React from 'react'
import { useSelector } from 'react-redux'
import spinner from '../images/spinner.svg'
import Book from './Book'

export default function BooksContainer() {
	const { items: books, totalItems, isLoading } = useSelector((state) => state.books)
	console.log(`isLoading --> ${isLoading}`);


	if (isLoading) {
		return (
			<section className="container">
				<img className="loader" src={spinner} alt="Loading..." width="300" height="300" />
			</section>
		)
	}

	// Da cambiare con un nuovo parametro firstAccess
	if (books.length === 0) {
		return (<section className="container booksContainer">
			<h2>
				Make your first search
			</h2>
		</section>)
	}

	return (
		<section className="container booksContainer">
			<h2>La tua ricerca ha prodotto {totalItems} risultati</h2>

			<div className="books">
				{books.map((book) => {
					console.log(book);
					const {
						publisher,
						publishedDate,
						title,
						imageLinks
					} = book.volumeInfo;
					const authors = book.volumeInfo.authors?.join(', ');
					const categories = book.volumeInfo.categories?.join(' ')

					const image = imageLinks?.smallThumbnail;
					const newBook = {
						authors,
						publisher,
						publishedDate,
						title,
						categories,
						image
					};
					return <Book key={book.id} {...newBook} />
				})}
			</div>

		</section>
	)
}

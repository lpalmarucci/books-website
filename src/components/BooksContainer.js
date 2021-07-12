import React from 'react'
import { useSelector } from 'react-redux'
import spinner from '../images/spinner.svg'
import Books from './Books'

export default function BooksContainer() {
	const { items: books, totalItems, isLoading } = useSelector((state) => state.books)

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
				Fai la tua prima ricerca
			</h2>
		</section>)
	}

	return (
		<section className="container booksContainer">
			<h2>La tua ricerca ha prodotto {totalItems} risultati</h2>

			<Books books={books} />

		</section>
	)
}

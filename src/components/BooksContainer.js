import React from 'react'
import { useSelector } from 'react-redux'
import Books from './Book/Books'
import Loader from './Loader'

export default function BooksContainer() {
	const { items: books, totalItems, isLoading } = useSelector((state) => state.books)

	if (isLoading) {
		return (
			<Loader />
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

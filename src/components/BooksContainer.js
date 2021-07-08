import React from 'react'
import { useSelector } from 'react-redux'

export default function BooksContainer() {
	const { items: books, totalItems } = useSelector((state) => state.books)

	if (books.length === 0) {
		return (<section className="container">
			<h2>
				Make your first search
			</h2>
		</section>)
	}

	return (
		<section className="container">
			<h2>La tua ricerca ha prodotto {totalItems} risultati</h2>
			{books.map((book) => {
				console.log(book)
				const {
					authors,
					categories,
					imageLinks,
					description
				} = book.volumeInfo
				return <section key={book.id}>
					<h3></h3>
				</section>
			})}
		</section>
	)
}

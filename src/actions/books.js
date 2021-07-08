const getBooks = () => ({
	type: 'GET_BOOKS'
}),

	setBooks = (books) => ({
		type: 'SET_BOOKS',
		payload: books
	}),

	setNumBooks = (n) => ({
		type: 'SET_NUM_BOOKS',
		payload: n
	}),

	actions = {
		getBooks,
		setBooks,
		setNumBooks
	}

export default actions

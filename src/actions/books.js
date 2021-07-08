const getBooks = () => ({
	type: 'GET_BOOKS'
}),

	setBooksInfos = (booksInfos) => ({
		type: 'SET_BOOKS',
		payload: booksInfos
	}),

	setLoading = () => ({
		type: 'SET_LOADING'
	}),

	actions = {
		getBooks,
		setBooksInfos,
		setLoading
	}

export default actions

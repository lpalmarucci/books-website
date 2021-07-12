const getBooks = () => ({
	type: 'GET_BOOKS'
})

const setBooksInfos = (booksInfos) => ({
	type: 'SET_BOOKS',
	payload: booksInfos
})

const setLoading = () => ({
	type: 'SET_LOADING'
})

const setOrderBy = (orderBy) => ({
	type: 'SET_ORDERBY',
	payload: orderBy
})

const stopLoading = () => ({
	type: 'STOP_LOADING'
})

const updateBooks = (newBooks) => ({
	type: 'UPDATE_BOOKS',
	payload: newBooks
})

const actions = {
	getBooks,
	setBooksInfos,
	setLoading,
	setOrderBy,
	stopLoading,
	updateBooks
}

export default actions

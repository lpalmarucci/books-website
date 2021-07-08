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

const actions = {
	getBooks,
	setBooksInfos,
	setLoading,
	setOrderBy,
	stopLoading
}

export default actions

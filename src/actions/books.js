let actions = {};

actions.getBooks = () => ({
	type: 'GET_BOOKS'
})

actions.setBooksInfos = (booksInfos) => ({
	type: 'SET_BOOKS',
	payload: booksInfos
})

actions.setLoading = () => ({
	type: 'SET_LOADING'
})

actions.setOrderBy = (orderBy) => ({
	type: 'SET_ORDERBY',
	payload: orderBy
})

actions.stopLoading = () => ({
	type: 'STOP_LOADING'
})

actions.updateBooks = (newBooks) => ({
	type: 'UPDATE_BOOKS',
	payload: newBooks
})

export default actions;
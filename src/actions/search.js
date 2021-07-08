const setQueryString = (q) => {
    return {
        type: 'SET_Q',
        payload: q
    }
}


const clearQueryString = () => {
    return {
        type: 'CLEAR_Q'
    }
}

const throwSearchError = () => ({
    type: 'THROW_SEARCH_ERROR'
})

const actions = {
    setQueryString,
    clearQueryString,
    throwSearchError
}

export default actions

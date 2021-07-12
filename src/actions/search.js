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

const setLastUrlCalled = (str) => ({
    type: 'SET_LAST_URL_CALLED',
    payload: {
        url: str
    }
})

const setNumItemsDisplayed = (n) => ({
    type: 'SET_NUM_ITEMS_DISPLAYED',
    payload: {
        count: n
    }
})

const actions = {
    setQueryString,
    clearQueryString,
    throwSearchError,
    setLastUrlCalled,
    setNumItemsDisplayed
}

export default actions

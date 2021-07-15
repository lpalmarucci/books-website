let actions = {};

actions.setQueryString = (q) => {
    return {
        type: 'SET_Q',
        payload: q
    }
}


actions.clearQueryString = () => {
    return {
        type: 'CLEAR_Q'
    }
}

actions.throwSearchError = () => ({
    type: 'THROW_SEARCH_ERROR'
})

actions.setLastUrlCalled = (str) => ({
    type: 'SET_LAST_URL_CALLED',
    payload: {
        url: str
    }
})

actions.setNumItemsDisplayed = (n) => ({
    type: 'SET_NUM_ITEMS_DISPLAYED',
    payload: {
        count: n
    }
})


export default actions
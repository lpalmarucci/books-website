const searchReducer = (state = {
    q: '',
    isError: false,
    showedItems: 0,
    lastUrlCalled: ''
}, action) => {
    if (action.type === 'SET_Q') {
        return {
            ...state,
            q: action.payload,
            isError: false
        }
    } else if (action.type === 'CLEAR_Q') {
        return {
            ...state,
            q: '',
            isError: false
        }
    } else if (action.type === 'THROW_SEARCH_ERROR') {
        return {
            ...state,
            isError: true
        };
    } else if (action.type === 'SET_LAST_URL_CALLED') {
        return {
            ...state,
            lastUrlCalled: action.payload.url
        }
    } else if (action.type === 'SET_NUM_ITEMS_DISPLAYED') {
        return {
            ...state,
            showedItems: action.payload.count
        }
    }
    return state;
}

export default searchReducer

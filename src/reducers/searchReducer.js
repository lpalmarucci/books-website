const searchReducer = (state = {
    q: '',
    isError: false
}, action) => {
    if (action.type === 'SET_Q') {
        return {
            q: action.payload,
            isError: false
        }
    } else if (action.type === 'CLEAR_Q') {
        return {
            q: '',
            isError: false
        }
    } else if (action.type === 'THROW_SEARCH_ERROR') {
        return {
            ...state,
            isError: true
        };
    }
    return state;
}

export default searchReducer

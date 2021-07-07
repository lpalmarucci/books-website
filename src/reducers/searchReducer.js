const searchReducer = (state = "", action) => {
    if (action.type === 'SET') {
        return {
            ...state, searchText: action.payload
        }
    } else if (action.type === 'CLEAR') {
        return {
            ...state, searchText: ''
        }
    }
    return state;
}

export default searchReducer
const searchReducer = (state = "", action) => {
    if (action.type === 'SET_Q') {
        return action.payload
    } else if (action.type === 'CLEAR_Q') {
        return ''
    }
    return state;
}

export default searchReducer
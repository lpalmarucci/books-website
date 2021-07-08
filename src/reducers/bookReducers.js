const bookReducer = (state = {
    items: [],
    totalItems: 0
}, action) => {
    switch (action.type) {

        case 'SET_BOOKS':
            return {
                ...state,
                items: action.payload
            }
        case 'SET_NUM_BOOKS':
            return {
                ...state,
                totalItems: action.payload
            }

        default:
            return state;
    }
}

export default bookReducer

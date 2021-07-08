const bookReducer = (state = {
    items: [],
    totalItems: 0,
    isLoading: false
}, action) => {
    switch (action.type) {

        case 'SET_BOOKS':
            return {
                ...state,
                items: action.payload.items,
                totalItems: action.payload.totalItems,
                isLoading: false
            }

        case 'SET_LOADING':
            return {
                ...state,
                isLoading: true
            }

        default:
            return state;
    }
}

export default bookReducer

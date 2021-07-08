const bookReducer = (state = {
    items: [],
    totalItems: 0,
    isLoading: false,
    orderBy: ''
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

        case 'SET_ORDERBY':
            return {
                ...state,
                orderBy: action.payload
            }

        case 'STOP_LOADING':
            return {
                ...state,
                isLoading: false
            }

        default:
            return state;
    }
}

export default bookReducer

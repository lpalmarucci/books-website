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

const actions = {
    setQueryString,
    clearQueryString
}

export default actions
import { combineReducers } from 'redux'

import searchReducers from './searchReducer'

const RootReducers = combineReducers({
    search: searchReducers
})

export default RootReducers
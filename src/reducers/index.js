import { combineReducers } from 'redux'

import searchReducers from './searchReducer'
import bookReducers from './bookReducers'

const RootReducers = combineReducers({
    search: searchReducers,
    books: bookReducers
})

export default RootReducers

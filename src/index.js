import React from 'react';
import ReactDOM from 'react-dom';
// CSS
import './css/index.css';
import './css/books.css';
import './css/search.css';
import './css/media.css';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

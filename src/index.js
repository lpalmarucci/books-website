import React from 'react';
import ReactDOM from 'react-dom';
// CSS
import './css/index.css';
import './css/books.css';
import './css/search.css';
import './css/media.css';
import './css/menu.css'
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import { BrowserRouter as Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  storage
}


const persistedReducer = persistReducer(
  persistConfig,
  reducers
)

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const persistor = persistStore(store);

ReactDOM.render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </>,
  document.getElementById('root')
);

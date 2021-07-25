import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Book from './pages/Book';
import Error from './pages/Error';
import Home from './pages/Home';
import SavedBooks from './pages/SavedBooks';

const items = [
  {
    displayName: 'Home',
    url: '/'
  },
  {
    displayName: 'Saved',
    url: '/books/saved'
  }
];

export default function App() {
  return (
    <>
      <Menu items={items} />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/book/:id" component={Book} />
        <Route path="/books/saved" component={SavedBooks} exact />
        <Route component={Error} />
      </Switch>
    </>
  );
}

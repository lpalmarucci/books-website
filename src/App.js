import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Book from './pages/Book';
import Error from './pages/Error';
import Home from './pages/Home';
import SavedBooks from './pages/SavedBooks';

const menuItems = [
  {
    id: 1,
    displayName: 'Home',
    url: '/'
  },
  {
    id: 2,
    displayName: 'Saved',
    url: '/books/saved'
  }
];

export default function App() {
  return (
    <>
      <Menu items={menuItems} />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/book/:id" component={Book} />
        <Route path="/books/saved" component={SavedBooks} exact />
        <Route component={Error} />
      </Switch>
    </>
  );
}

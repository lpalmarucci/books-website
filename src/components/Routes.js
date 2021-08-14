import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Book from '../pages/Book';
import Error from '../pages/Error';
import Home from '../pages/Home';
import SavedBooks from '../pages/SavedBooks';

export default function Routes() {
    return (
        <>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/book/:id" component={Book} />
                <Route path="/books/saved" component={SavedBooks} exact />
                <Route component={Error} />
            </Switch>
        </>
    )
}

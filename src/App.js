import React from 'react';
import { Link, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Shelf from './Shelf';
import BookShelf from './BookShelf';
import SearchPage from './SearchPage';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookShelf
          />
        )} />
        <Route path="/search" render={() => (
          <SearchPage
          />
        )} />
      </div>
    )
  }
}

export default App;
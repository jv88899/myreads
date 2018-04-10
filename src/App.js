import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';
import SearchPage from './SearchPage';

class App extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({
          books: books
        })
      })
  }

  handleChange = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState({
          books: books
        })
      })
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookShelf
            books={this.state.books}
            handleChange={this.handleChange}
          />
        )} />
        <Route path="/search" render={() => (
          <SearchPage
            handleChange={this.handleChange}
            shelf={this.state.books}
          />
        )} />
      </div>
    )
  }
}

export default App;
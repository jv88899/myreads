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
        this.setState({ books })
      })
  }

  handleChange = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      book.shelf = newShelf;
      let newBooks = this.state.books.filter( (newBook) => {
        return newBook.id !== book.id;
      })
      // newBooks.push(book);
      this.setState({ books: newBooks.concat(book) })
    })
  }

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookShelf
            books={books}
            handleChange={this.handleChange}
          />
        )} />
        <Route path="/search" render={() => (
          <SearchPage
            handleChange={this.handleChange}
            shelf={books}
          />
        )} />
      </div>
    )
  }
}

export default App;
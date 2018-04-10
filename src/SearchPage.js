import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class SearchPage extends React.Component {
    state = {
        query: '',
        searchResults: []
    }

    updateShelf = (newBooks, currentBooks) => {
        newBooks.map( (book) => {
            if (!book.shelf) {
                book.shelf = 'none';
            }
            const onShelf = currentBooks.filter( (currentBook) => {
                return book.id === currentBook.id;
            })
            onShelf.forEach((onShelfBook) => {
                book.shelf = onShelfBook.shelf;
            })
        })
        return newBooks;
    }

    handleSearch = (query) => {
        if (query) {
            BooksAPI.search(query).then((books) => {
                if (books.length > 0) {
                    this.setState({ searchResults: this.updateShelf(books, this.props.shelf) })
                }
            })
        }
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text"
                            placeholder="Search by title or author"
                            onChange={(event) => (this.handleSearch(event.target.value))}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {
                        this.state.searchResults.map( (book, index) => {
                            return (
                                <Book
                                    key={index}
                                    book={book}
                                    handleChange={this.props.handleChange}
                                />
                            )
                        })
                    }
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage;
import React from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

class BookShelf extends React.Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf
                            shelfTitle={'Currently Reading'}
                            books={this.props.books.filter( (book) => {
                                return book.shelf === 'currentlyReading'
                            })}
                            handleChange={this.props.handleChange}
                        />
                        <Shelf
                            shelfTitle={'Want to Read'}
                            books={this.props.books.filter( (book) => {
                                return book.shelf === 'wantToRead'
                            })}
                            handleChange={this.props.handleChange}
                        />
                        <Shelf
                            shelfTitle={'Read'}
                            books={this.props.books.filter( (book) => {
                                return book.shelf === 'read'
                            })}
                            handleChange={this.props.handleChange}
                        />
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default BookShelf;
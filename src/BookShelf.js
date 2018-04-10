import React from 'react';
import Shelf from './Shelf';
import { Link } from 'react-router-dom';

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
            </div>
        )
    }
}

export default BookShelf;
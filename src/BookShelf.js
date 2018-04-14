import React from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

const BookShelf = (props) => (
    <div className="list-books">
        <div className="list-books-title">
            <h1>My Reads</h1>
        </div>
        <div className="list-books-content">
            <div>
                <Shelf
                    shelfTitle={'Currently Reading'}
                    books={props.books.filter( (book) => {
                        return book.shelf === 'currentlyReading'
                    })}
                    handleChange={props.handleChange}
                />
                <Shelf
                    shelfTitle={'Want to Read'}
                    books={props.books.filter( (book) => {
                        return book.shelf === 'wantToRead'
                    })}
                    handleChange={props.handleChange}
                />
                <Shelf
                    shelfTitle={'Read'}
                    books={props.books.filter( (book) => {
                        return book.shelf === 'wantToRead'
                    })}
                    handleChange={props.handleChange}
                />
            </div>
        </div>
        <div className="open-search">
            <Link to='/search'>Add a Book</Link>
        </div>
    </div>
)

export default BookShelf;
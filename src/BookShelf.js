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
                        />
                        <Shelf
                        />
                        <Shelf
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default BookShelf;
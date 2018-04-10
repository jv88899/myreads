import React from 'react';
import Book from './Book';

class Shelf extends React.Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title"></h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        this.props.books.map( (book, index) => {
                            return (
                                <Book
                                    key={index}
                                    book={book}
                                    handleChange={this.props.handleChange}
                                    shelf={book.shelf}
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

export default Shelf;
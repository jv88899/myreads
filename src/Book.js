import React from 'react';

class Book extends React.Component {
    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div
                            className="book-cover"
                            style={{width: 128, height: 193, backgroundImage: `url('${this.props.book.imageLinks ? this.props.book.imageLinks.smallThumbnail : ''}')`}}
                        ></div>
                        <div className="book-shelf-changer">
                            <select value={this.props.book.shelf} onChange={(event) => (this.props.handleChange(this.props.book, event.target.value))}>
                                <option disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">
                    { this.props.book.authors ? this.props.book.authors.join(', ') : '' }
                    </div>
                </div>
            </li>
        )
    }
}

export default Book;
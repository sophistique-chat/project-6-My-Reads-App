import React, { Component } from 'react';
import Book from './Book'



class WantToRead extends Component {
    
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            this.props.books
                            .filter(book => book.shelf === 'currentlyReading')
                            .map(book => (
                                <li key = {book.id}>
                                    <Book  
                                    book = {book}
                                    changeShelf={this.props.changeShelf}
                                    currentShelf ="currentlyReading"/>
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default WantToRead
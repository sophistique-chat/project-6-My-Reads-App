import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'



class BookSearch extends Component {
  state = {
    query: '',
    searchHistory: []
  }
  /* MaevaNAP tutorial at https://www.youtube.com/watch?v=i6L2jLHV9j8 */
  updateQuery = (query) => {
    this.setState({ query: query })
    this.getSearchHistory(query)
  }

  getSearchHistory = (query) => {
    if (query) {
      BooksAPI.search(query).then((searchHistory) => {
        (searchHistory.length === 0) ? (
          this.clearSearchHistory() 
        ) : (
          this.setState({searchHistory: searchHistory})
            )
      })
    }
    if (query.length === 0) {
      this.clearSearchHistory()
    }
  }

  clearSearchHistory = () => {
    this.setState({ searchHistory: [] })
  }

  render() {
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to = '/main'>Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text"
                    placeholder="Search by title or author"
                    value={this.state.query}
                     onChange={(event) => this.updateQuery(event.target.value)
                    }
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              { /*Check if an array of books is returned, so that .map() method implements without throwing an error*/
                Array.isArray(this.state.searchHistory) ? ( 
                    this.state.searchHistory.map(newBook=> {
                      let defaultShelf = "none"
                      this.props.books.map(book => (
                        book.id === newBook.id ? (
                          defaultShelf = book.shelf
                        ) : (
                          ''
                        )
                      ))
                      return (
                        <li key = {newBook.id}>
                          <Book  book = {newBook}
                          changeShelf={this.props.changeShelf}
                          currentShelf = {defaultShelf}
                          /> 
                        </li> 
                      )
                    })
                ) : (
                  /*If no books match the query, show "No books found" message*/
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Nothing Found!</h2>
                      <div className="bookshelf-books">
                      {/*original image: https://www.cinemauae.com/*/}
                        <img style={{ width: 128, height: 193}} src='https://github.com/sophistique-chat/my-pic-bin/blob/master/no-image.jpg?raw=true' alt='No Book Found'/>
                      </div>              
                  </div>
                )
              }  
            </ol>
          </div>
        </div>
    </div>
    ) 
  }
}

export default BookSearch

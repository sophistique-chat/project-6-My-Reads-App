import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import Read from './Read'
import * as BooksAPI from './BooksAPI'


class Main extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    this.getAllBooks()
  }

  getAllBooks = () => {BooksAPI.getAll().then((books) => {
    this.setState({books})
    })
  }
    
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getAllBooks()
    })
  }

  render() {
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
        <div className="list-books-content">
        </div>

        <CurrentlyReading 
            books={this.state.books}
            changeShelf={this.changeShelf}
            currentShelf={this.props.currentShelf}/>

        <WantToRead 
           books={this.state.books}
           changeShelf={this.changeShelf}
           currentShelf={this.props.currentShelf}/>

        <Read 
           books={this.state.books}
           changeShelf={this.changeShelf}
           currentShelf={this.props.currentShelf}/>
          {/*Using forceUpdate() method to make sure that currently changed shelf
            /*will display on the search page WITHOUT updating the search page (method implementation help at:
            /*https://github.com/facebook/react/issues/3071)*/}
          <div className="open-search">
            <Link to='/search'>Add book</Link>
          </div>
        </div>
      </div>
    )
  }
}

 export default Main

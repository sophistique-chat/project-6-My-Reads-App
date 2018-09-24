import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookSearch from './BookSearch'
import Main from './Main'
import Des from './Des'
import './App.css'



class BooksApp extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    this.getAllBooks()
  }

   getAllBooks = () => {
     BooksAPI.getAll().then((books) => {
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
      <div className="app">
        <Route exact path = '/search' render={() => (
          <BookSearch changeShelf={this.changeShelf}
            books={this.state.books}
            currentShelf ={this.props.currentShelf}
          />
        )}/>

        <Route exact path = '/main' render = {() => (
           <Main books ={this.state.books}
            changeShelf={this.changeShelf}
            currentShelf ={this.currentShelf}
          /> 
        )}/>
        {/* Passing multiple props/params through a <Link/> 
        /*https://stackoverflow.com/questions/37696391/multiple-params-with-react-router*/}
        <Route exact path = '/main/description/:title/:author/:info/'  render={({ match, location }) => (
          <Des  
            location ={location.state}
            params={match.params} 
            changeShelf={this.changeShelf}
            books={this.state.books}
            currentShelf ={this.props.currentShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp

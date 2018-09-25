
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ShelfChanger from './ShelfChanger'
import Des from './Des'



class Book extends Component {

  render() {
      /*original image: https://www.cinemauae.com/*/
    let bookImage = this.props.book.imageLinks ? (this.props.book.imageLinks.thumbnail) : ("https://github.com/sophistique-chat/my-pic-bin/blob/master/no-image.jpg?raw=true");
      return (
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${bookImage}")`}}>
            </div>
                 <ShelfChanger 
                 book={this.props.book}
                 currentShelf={this.props.currentShelf}
                 changeShelf={this.props.changeShelf} />
          </div>
            <div className="book-name-wrapper">
              <div className="book-title">{this.props.book.title}</div>
              <div className="book-authors">{this.props.book.authors}</div>
            </div>
            { /*Tyler McGinnis tutorial at https://www.youtube.com/watch?v=nmbX2QL7ZJc */
              /*React Router Documentation at https://knowbody.github.io/react-router-docs/api/Link.html*/}
               {
                  <Link 
                    onClick={() => {
                      return (
                        <Des/>
                      )
                    }
                  }
                    className="learn-more" to={{
                      pathname: `/description/${this.props.book.title}/${this.props.book.authors}/${this.props.book.description}`,
                      state: { authors: this.props.book.authors,
                      bookImage:  this.props.book.imageLinks.thumbnail}
                    }}>
                    Learn More
                  </Link>
                }
             </div>
      )
  }  
}

export default Book
